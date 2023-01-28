import { pool } from "../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case 'POST':
                  return await sendToDatabase(req, res);
            case "DELETE":
                  return await deleteFromDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const deleteFromDatabase = async (req, res) => {
      try {
            const { id } = req.body;
            const [result] = await pool.query("DELETE FROM drivers WHERE phone = ?", [id]);
            return res.status(200).json({ ...req.body, id: result.insertId });
      } catch (error) {
            return res.status(500).json(error);
      }
}

const sendToDatabase = async (req, res) => {
      try {
            const { id, city, district, address, phone } = req.body;
            const [result] = await pool.query("UPDATE donations SET phone = ?, city = ?, district = ?, address = ? WHERE id = ?", [phone, city, district, address, id]);
            return res.status(200).json({ result })
      } catch (error) {
            return res.status(500).json(error)
      }
}
