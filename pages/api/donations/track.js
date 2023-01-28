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
            const { trackNumber, trackType } = await req.body;
            switch (trackType) {
                  case "phone":
                        const [result] = await pool.query("SELECT * FROM donations WHERE phone = ?", [trackNumber]);
                        return res.status(200).json(result)
                  case "trackId":
                        const [results] = await pool.query("SELECT * FROM donations WHERE id = ?", [trackNumber]);
                        return res.status(200).json(results)
                  default:
                        return
            }
            // if (trackType === 'phone') {
            //       const [result] = await pool.query("SELECT * FROM donations WHERE phone = ?", [trackNumber]);
            //       return res.status(200).json(result)
            // } else {
            //       const [result] = await pool.query("SELECT * FROM donations WHERE id = ?", [trackNumber]);
            //       return res.status(200).json(result)
            // }
      } catch (error) {
            return res.status(500).json(error)
      }
}
