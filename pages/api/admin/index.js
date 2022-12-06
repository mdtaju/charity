import { pool } from "../../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case 'POST':
                  return await getFromDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const getFromDatabase = async (req, res) => {
      try {
            const { user_name, password } = req.body;
            const [result] = await pool.query("SELECT user_name FROM admins WHERE user_name = ? AND password = ?", [user_name, password]);
            return res.status(200).json(result)
      } catch (error) {
            return res.status(500).json(error)
      }
}
