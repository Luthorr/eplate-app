import db from '../config/db.js';

class Comment {
  constructor(userId, plateId, commentMsg, date, opinionId) {
    this.userId = userId;
    this.plateId = plateId;
    this.commentMsg = commentMsg;
    this.date = date;
    this.opinionId = opinionId;
    this.votes = 0;
  }

  save() {
    const sql =
      'INSERT INTO comment(userId, plateId, commentMsg, date, votes, opinionId) VALUES (?,?,?,?,?,?)';

    return db.execute(sql, [
      this.userId,
      this.plateId,
      this.commentMsg,
      this.date,
      this.votes,
      this.opinionId,
    ]);
  }

  static getAll() {
    let sql =
      'SELECT c.id, c.plateId, c.date, u.nick, p.plateText, c.votes, c.opinionId FROM comment c, user u, plate p WHERE c.userId = u.id AND c.plateId = p.id';
    return db.execute(sql);
  }

  static delete(id) {
    const sql = 'DELETE FROM comment WHERE id = ?';
    return db.execute(sql, [id]);
  }

  static getPlateComments(plateId) {
    let sql =
      'SELECT c.id, c.plateId, c.date, u.nick, p.plateText, c.votes, c.opinionId FROM comment c, user u, plate p WHERE c.userId = u.id AND c.plateId = p.id AND c.plateId = ?';
    return db.execute(sql, [plateId]);
  }
}

export default Comment;
