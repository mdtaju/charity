import { pool } from "../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case 'GET':
                  return await getFromDatabase(req, res);
            case 'DELETE':
                  return await deleteFromDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const getFromDatabase = async (req, res) => {
      try {
            const [result] = await pool.query("SELECT * FROM warehouse");
            return res.status(200).json(result);
      } catch (error) {
            return res.status(500).json(error);
      }
}

const deleteFromDatabase = async (req, res) => {
      try {
            const { id } = req.body;
            const [result] = await pool.query("DELETE FROM warehouse WHERE id = ?", [id]);
            return res.status(200).json(result);
      } catch (error) {
            return res.status(500).json(error);
      }
}
