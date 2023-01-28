import { pool } from "../../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case 'POST':
                  return await updateDonationTable(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const updateDonationTable = async (req, res) => {
      try {
            const { id, name, phone, pickedStatus } = req.body;
            const [getRes] = await pool.query("SELECT * FROM donations WHERE id = ?", [id]);
            const { ofp } = getRes[0];
            const inOfp = ofp + 1;
            if (inOfp) {
                  const [result] = await pool.query("UPDATE donations SET driverPhone = ?, driverName = ?, trackStatus = ?, picked = ?, ofp = ? WHERE id = ?", [phone, name, 0, pickedStatus, inOfp, id]);
                  return res.status(200).json(result)
            } else {
                  const [result] = await pool.query("UPDATE donations SET driverPhone = ?, driverName = ?, trackStatus = ?, picked = ?, ofp = ? WHERE id = ?", [phone, name, 0, pickedStatus, 1, id]);
                  return res.status(200).json(result)
            }
      } catch (error) {
            return res.status(500).json(error)
      }
}
