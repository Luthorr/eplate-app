import db from '../config/db.js';

class Comment {
  constructor(userId, plateId, commentMsg, date, opinionId) {
    this.userId = userId;
    this.plateId = plateId;
    this.commentMsg = commentMsg;
    this.date = date;
    this.opinionId = opinionId;
  }

  save() {
    const sql =
      'INSERT INTO comment(userId, plateId, commentMsg, date, opinionId) VALUES (?,?,?,?,?)';

    return db.execute(sql, [
      this.userId,
      this.plateId,
      this.commentMsg,
      this.date,
      this.opinionId,
    ]);
  }

  static delete(id) {
    const sql = 'DELETE FROM comment WHERE id = ?';
    return db.execute(sql, [id]);
  }

  static getAll() {
    let sql =
      'SELECT comment.id, comment.userId, comment.plateId, comment.commentMsg, comment.date, comment.opinionId, user.nick, plate.plateText, COALESCE(sum(user_comment_vote.vote),0) AS votes FROM `comment` LEFT JOIN `user_comment_vote` ON comment.id=user_comment_vote.commentId LEFT JOIN `plate` ON comment.plateId = plate.id LEFT JOIN `user` ON comment.userId = user.id GROUP BY comment.id ORDER BY comment.date DESC';
    return db.execute(sql);
  }

  static getSpecificPlateComments(plateId) {
    let sql =
      'SELECT comment.id, comment.userId, comment.plateId, comment.commentMsg, comment.date, comment.opinionId, user.nick, plate.plateText, COALESCE(sum(user_comment_vote.vote),0) AS votes FROM `comment` LEFT JOIN `user_comment_vote` ON comment.id=user_comment_vote.commentId LEFT JOIN `plate` ON comment.plateId = plate.id LEFT JOIN `user` ON comment.userId = user.id WHERE comment.plateId = ? GROUP BY comment.id ORDER BY comment.date DESC';
    return db.execute(sql, [plateId]);
  }

  static getDriversRanking(opinionId) {
    let sql =
      'SELECT * FROM ( SELECT c.plateId, p.plateText, COUNT(c.plateId) AS COMMENTS_POSTED, MONTH(c.date) AS MONTH, YEAR(c.date) AS YEAR, ROW_NUMBER() OVER (PARTITION BY MONTH, YEAR) AS n FROM comment c, plate p WHERE c.plateId = p.id AND c.opinionId = ? GROUP BY c.plateId, MONTH, YEAR ORDER BY YEAR DESC, MONTH DESC) AS x WHERE n <= 10';
    return db.execute(sql, [opinionId]);
  }

  static countNegativeOpinions(plateId) {
    let sql =
      'SELECT p.plateText, COUNT(c.opinionId) AS negative FROM comment c, plate p WHERE c.plateId = p.id AND c.opinionId = 1 AND p.id = ?';
    return db.execute(sql, [plateId]);
  }

  static getPlateCommentsByText(plateText) {
    let sql =
      'SELECT comment.id, comment.userId, comment.plateId, comment.commentMsg, comment.date, comment.opinionId, user.nick, plate.plateText, COALESCE(sum(user_comment_vote.vote),0) AS votes FROM `comment` LEFT JOIN `user_comment_vote` ON comment.id=user_comment_vote.commentId LEFT JOIN `plate` ON comment.plateId = plate.id LEFT JOIN `user` ON comment.userId = user.id WHERE plate.plateText LIKE ? GROUP BY comment.id ORDER BY comment.date DESC';
    return db.execute(sql, [`${plateText}%`]);
  }

  static addCommentRating(userId, commentId, vote) {
    let sql =
      'INSERT INTO user_comment_vote(userId, commentId, vote) VALUES (?,?,?)';

    return db.execute(sql, [userId, commentId, vote]);
  }
}

export default Comment;
