import { Request, Response } from "express";
import pool from "../db";

class PostController {
    async createPost(req: Request, res: Response) {
        try {
            const { title, content, userId } = req.body;
            const newPost = await pool.query(
                "INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *",
                [title, content, userId]
            );
            res.json(newPost.rows[0]);
        } catch(e) {
            console.log(e)
        }
    }

    async getPostsByUser(req: Request, res: Response) {
        const id = req.query.id;
        const posts = await pool.query("select * from post where user_id = $1", [id]);
        res.json(posts.rows)
    }
}

export default PostController;
