const pool = require("../pool");

class UserRepo {
  static async find() {
    const result = await pool.query("SELECT * FROM users");
  }

  static async findById() {}

  static async insert() {}

  static async update() {}

  static async delete() {}
}

module.exports = UserRepo;
