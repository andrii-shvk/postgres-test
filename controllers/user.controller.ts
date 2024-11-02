import { Request, Response } from "express";
import pool from "../db";

class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        const { name, surname } = req.body;
        console.log(name, surname);
        const newPerson = await pool.query(
            `INSERT INTO person (name, surname) values ($1, $2) RETURNING *`,
            [name, surname]
        );
        res.json(newPerson.rows[0]);
    }
    async getUsers(req: Request, res: Response): Promise<void> {
        const user = await pool.query("SELECT * FROM person");
        res.json(user.rows);
    }
    async getOneUser(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const user = await pool.query("SELECT * FROM person where id = $1", [
            id,
        ]);
        res.json(user.rows[0]);
    }
    async updateUser(req: Request, res: Response): Promise<void> {
        const { id, name, surname } = req.body;
        const user = await pool.query(
            "UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *",
            [name, surname, id]
        );
        res.json(user.rows[0]);
    }
    async deleteUser(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const user = await pool.query("DELETE from person where id = $1", [id]);
        res.json(user.rows[0]);
    }
}

export default UserController;
