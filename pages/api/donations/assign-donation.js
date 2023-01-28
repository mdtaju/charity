import moment from "moment/moment";
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
            const { id, name, phone, assignBy, pickedStatus } = req.body;
            const [getRes] = await pool.query("SELECT * FROM donations WHERE id = ?", [id]);
            const { firstAssignedTime } = getRes[0];
            if (firstAssignedTime) {
                  const [result] = await pool.query("UPDATE donations SET driverPhone = ?, driverName = ?, assignedBy = ?, trackStatus = ?, picked = ? WHERE id = ?", [phone, name, assignBy, 1, pickedStatus, id]);
                  return res.status(200).json(result)
            } else {
                  const utcAssign = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
                  const [result] = await pool.query("UPDATE donations SET driverPhone = ?, driverName = ?, assignedBy = ?, firstAssignedTime = ?, trackStatus = ?, picked = ? WHERE id = ?", [phone, name, assignBy, utcAssign, 1, pickedStatus, id]);
                  return res.status(200).json(result)
            }
      } catch (error) {
            return res.status(500).json(error)
      }
}
