import Comment from '../models/Comment.js';

export const getComments = async (req, res, next) => {
  try {
    const [result, _] = await Comment.getAll();

    res.status(200).json(
      result.map(({ id, plateId, date, nick, plateText, votes, opinionId }) => {
        return {
          id,
          plate: { id: plateId, plateText },
          user: { nick },
          votes,
          date,
          opinionId,
        };
      })
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createComment = async (req, res, next) => {
  try {
    const { userId, plateId, commentMsg, date, opinionId } = req.body;
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
    await Comment.delete(req.params.id);
    res.status(200).send('Komentarz został usunięty!');
  } catch (error) {
    console.log(error);
    next(error);
  }
};
