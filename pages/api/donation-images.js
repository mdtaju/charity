import { pool } from "../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case "GET":
                  return await getFromDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const getFromDatabase = async (req, res) => {
      try {
            const [results] = await pool.query("SELECT * FROM donation_image");
            return res.status(200).json(results);
      } catch (error) {
            return res.status(500).json(error)
      }
}