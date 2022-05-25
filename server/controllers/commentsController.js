import Comment from '../models/Comment.js';
import Plate from '../models/Plate.js';

const parseVotesInArray = (arr) =>
  arr.map((curComment) => ({
    ...curComment,
    votes: parseInt(curComment.votes),
  }));

export const getComments = async (req, res, next) => {
  try {
    const [result, _] = await Comment.getAll();

    res.status(200).json(parseVotesInArray(result));
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getSpecificPlateComments = async (req, res, next) => {
  try {
    const { id } = req.params;

    let [opinions, comments] = await Promise.all([
      Comment.countNegativeOpinions(id),
      Comment.getSpecificPlateComments(id),
    ]);

    let helper;

    [opinions, helper] = opinions;
    [comments, helper] = comments;

    if (!opinions[0]?.plateText) {
      res.status(404).send('Błąd podczas pobierania danych.');
    }

    const statistics = {
      ...opinions[0],
      positive: comments.length - opinions[0].negative,
    };

    res.status(200).json({ data: parseVotesInArray(comments), statistics });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getPlateCommentsByText = async (req, res, next) => {
  try {
    const { searchTerm } = req.params;
    const [result, _] = await Comment.getPlateCommentsByText(searchTerm);
    res.status(200).json(parseVotesInArray(result));
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createComment = async (req, res, next) => {
  try {
    const { userId, plateText, commentMsg, date, opinionId } = req.body;
    const plateTextToUpper = plateText.toUpperCase();

    let [plateId, _] = await Plate.getPlateId(plateTextToUpper);
    plateId = plateId[0]?.id || null;

    if (!plateId) {
      let newPlate = new Plate(plateTextToUpper);
      newPlate = await newPlate.save();
      plateId = newPlate[0].insertId;
    }

    let comment = new Comment(userId, plateId, commentMsg, date, opinionId);
    comment = await comment.save();

    res
      .status(201)
      .send({ message: `Wstawiono komentarz o ID: ${comment[0].insertId}` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Comment.delete(id);
    res.status(200).send('Komentarz został usunięty!');
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const addCommentRating = async (req, res, next) => {
  try {
    const { userId, commentId, vote } = req.body;
    console.log(req.body);
    await Comment.addCommentRating(userId, commentId, vote);
    res.status(200).send('Głos został oddany!');
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getDriversRanking = async (req, res, next) => {
  try {
    const [worstDrivers, _] = await Comment.getDriversRanking(1);
    const [bestDrivers, __] = await Comment.getDriversRanking(2);
    const worstDriversRanking = createRanking(worstDrivers);
    const bestDriversRanking = createRanking(bestDrivers);
    const finalResult = concatRankingArrays(
      worstDriversRanking,
      bestDriversRanking
    );
    res.status(200).send(finalResult);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//utworzenie obiektu zawierającego daty ROK-MIESIĄC jako klucze, a wartością przechowywaną jest tablica, zawierająca numery tablic i id tablicy.
const createRanking = (arr) => {
  const result = arr.reduce((acc, value) => {
    let { MONTH, YEAR, COMMENTS_POSTED, n, ...rest } = value;
    MONTH = MONTH.toString().padStart(2, '0');
    if (!acc[`${YEAR}-${MONTH}`]) {
      acc[`${YEAR}-${MONTH}`] = [];
    }
    acc[`${YEAR}-${MONTH}`].push(rest);
    return acc;
  }, {});
  return result;
};

//połączenie najgorszych i najlepszych kierowców w jeden obiekt. Połączenie dat.
const concatRankingArrays = (worstRank, bestRank) => {
  const result = {};
  insertValuesIntoKeys(worstRank, 'worst', result);
  insertValuesIntoKeys(bestRank, 'best', result);
  console.log(result);
  return result;
};

const insertValuesIntoKeys = (arr, secondKey, result) => {
  Object.keys(arr).forEach((key) => {
    if (!result[key]) {
      result[key] = { best: [], worst: [] };
    }
    result[key][secondKey] = arr[key];
  });
};
