import db from '../config/db.js';

class Plate {
  constructor(plateText) {
    this.plateText = plateText;
  }

  save() {
    const sql = 'INSERT INTO plate(plateText) VALUES (?)';
    return db.execute(sql, [this.plateText]);
  }

  static getPlateId(plateText) {
    let sql = 'SELECT id FROM plate WHERE plateText = ?';
    return db.execute(sql, [plateText]);
  }
}

export default Plate;
