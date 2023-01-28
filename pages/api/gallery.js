import fs from "fs/promises";
import { pool } from "../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case "GET":
                  return await getFromDatabase(req, res);
            case "DELETE":
                  return await deleteFromDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const getFromDatabase = async (req, res) => {
      try {
            await pool.query("CREATE TABLE IF NOT EXISTS gallery(id varchar(40) UNIQUE NOT NULL, date varchar(40), PRIMARY KEY(id))");
            const [results] = await pool.query("SELECT * FROM gallery");
            return res.status(200).json(results);
      } catch (error) {
            return res.status(500).json(error)
      }
}

const deleteFromDatabase = async (req, res) => {
      try {
            const { id } = req.body;
            const [result] = await pool.query("DELETE FROM gallery WHERE id = ?", [id]);
            await fs.unlink(`./public/resources/upload/${id}`);
            return res.status(200).json({ ...req.body, id: result.insertId });
      } catch (error) {
            return res.status(500).json(error)
      }
}