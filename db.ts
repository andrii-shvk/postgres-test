import { Pool } from "pg";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./us-east-2-bundle.pem").toString(),
    },
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_DATABASE || "mydb",
});

export default pool;
