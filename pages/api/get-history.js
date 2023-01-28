import { pool } from "../../src/config/db";

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
            const { trackNumber, trackType } = await req.body;
            switch (trackType) {
                  case "phone":
                        const [result] = await pool.query("SELECT * FROM tracking_history WHERE phone = ?", [trackNumber]);
                        return res.status(200).json(result)
                  case "trackId":
                        const [results] = await pool.query("SELECT * FROM tracking_history WHERE trackingID = ?", [trackNumber]);
                        return res.status(200).json(results)
                  default:
                        return
            }
            return res.status(200).json({ ...req.body, id: result.insertId })
      } catch (err) {
            console.log(err)
            return res.status(500).json({ message: err })
      }
}