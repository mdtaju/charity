import { pool } from "../../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case 'POST':
                  return await sendToDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const sendToDatabase = async (req, res) => {
      try {
            const { id, date, received, trackStatus, receivedBy } = req.body;
            const [result] = await pool.query("UPDATE donations SET receivedDate = ?, received = ?, trackStatus = ?, receivedBy = ? WHERE id = ?", [date, received, trackStatus, receivedBy, id]);
            return res.status(200).json({ ...req.body, id: result.insertId })
      } catch (error) {
            return res.status(500).json(error)
      }
}
