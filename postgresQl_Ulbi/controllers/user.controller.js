const db = require("../db/db");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await db.query(`SELECT * FROM person`);

      res.status(200).json({ message: "success", data: users.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getOneUserById(req, res) {
    try {
      const { userId } = req.params;

      const user = await db.query(
        `SELECT * FROM person WHERE id=${String(userId)}`
      );

      if (!user.rows.length) {
        return res
          .status(400)
          .json({ message: `Can not find user with id:${userId}` });
      }

      res.status(200).json({ message: "success", data: user.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createUser(req, res) {
    try {
      const { name, surname } = req.body;

      const user = await db.query(`SELECT * FROM person WHERE name=$1`, [name]);

      if (user.rows.length) {
        return res
          .status(200)
          .json({ message: `User with name ${name} was already exist!` });
      }

      const newUser = await db.query(
        `INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`,
        [name, surname]
      );

      res.status(200).json({
        message: `User with name:${name} and surname:${surname} was created!`,
        data: newUser.rows[0],
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateUserById(req, res) {
    try {
      const { name, surname } = req.body;
      const { userId } = req.params;

      const user = await db.query(
        `UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *`,
        [name, surname, userId]
      );

      if (!user.rows[0].length) {
        return res
          .status(400)
          .json({ message: `Can not find user with id:${userId}` });
      }

      res.status(200).json({
        message: `Person with id:${userId} was updated!`,
        data: user.rows[0],
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async removeUserById(req, res) {
    try {
      const id = req.query.id;

      //nee fix for delete relation
      const deletedUser = await db.query(
        `DELETE FROM person WHERE id=${id} RETURNING *`
      );

      if (!deletedUser.rows.length) {
        return res
          .status(400)
          .json({ message: `User with id:${id} is not found!` });
      }

      res.status(200).json({
        message: `User with id:${id} was deleted!`,
        data: deletedUser.rows,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new UserController();
