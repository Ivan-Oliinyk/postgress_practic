const db = require("../db/db");

class PostController {
  async getAllPosts(req, res, next) {
    try {
      const posts = await db.query("SELECT * FROM post");

      res.status(200).json({ data: posts.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getOnePostById(req, res, next) {
    try {
      const { post_id } = req.params;

      const post = await db.query(`SELECT * FROM post WHERE id=$1`, [post_id]);

      if (!post.rows.length) {
        return res
          .status(400)
          .json({ message: `Post with id:${post_id} not found!` });
      }

      res.status(200).json({ post: post.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createPost(req, res, next) {
    try {
      const { title, content, user_id } = req.body;
      const newPost = await db.query(
        `INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`,
        [title, content, user_id]
      );

      res
        .status(200)
        .json({ message: "Post was created!", data: newPost.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updatePost(req, res, next) {
    try {
      const { post_id } = req.params;
      const { title, content, user_id } = req.body;

      const postById = await db.query(
        `SELECT * FROM post WHERE id = ${post_id}`
      );

      if (!postById.rows.length) {
        return res
          .status(400)
          .json({ message: `Post with id:${post_id} is not defined!` });
      }

      const userById = await db.query(
        `SELECT * FROM person WHERE id=${user_id}`
      );

      console.log(userById);

      if (!userById.rows.length) {
        return res
          .status(400)
          .json({ message: `User with id:${user_id} is not defined!` });
      }

      const updatedPost = await db.query(
        `UPDATE post SET title=$1, content=$2, user_id=$3 WHERE id=$4 RETURNING *`,
        [title, content, user_id, post_id]
      );

      res
        .status(200)
        .json({ message: "Post was updated!", data: updatedPost.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deletePost(req, res, next) {
    try {
      const { id } = req.query;

      const deletedPost = await db.query(
        `DELETE FROM post WHERE id=$1 RETURNING *`,
        [id]
      );

      if (!deletedPost.rows.length) {
        return res
          .status(400)
          .json({ message: `Post with id:${id} is not found!` });
      }

      res.status(200).json({
        message: `Post with id:${id} was deleted!`,
        data: deletedPost.rows,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new PostController();
