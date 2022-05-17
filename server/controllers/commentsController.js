import Comment from '../models/Comment.js';
import Plate from '../models/Plate.js';

// const formatArray = (arr) =>
//   arr.map(
//     ({ id, plateId, date, nick, avatar, plateText, votes, opinionId }) => {
//       return {
//         id,
//         plate: { id: plateId, plateText },
//         user: { nick, avatar },
//         votes,
//         date,
//         opinionId,
//       };
//     }
//   );

const formatCommentsArray = (arr) =>
  arr.map((curComment) => ({
    ...curComment,
    votes: parseInt(curComment.votes),
  }));

// const formatSinglePlateComents = (arr) => {
//   arr.forEach((item) => delete item.plateText);
// };

export const getComments = async (req, res, next) => {
  try {
    const [result, _] = await Comment.getAll();

    res.status(200).json(formatCommentsArray(result));
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
    // console.log(statistics);

    res.status(200).json({ data: formatCommentsArray(comments), statistics });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getPlateCommentsByText = async (req, res, next) => {
  try {
    const { searchTerm } = req.params;
    const [result, _] = await Comment.getPlateCommentsByText(searchTerm);
    res.status(200).json(formatCommentsArray(result));
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
    plateId = plateId[0].id || null;

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
