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
            const { id, status, name, scheduleDate } = req.body;
            const statusToUtc = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            const [getRes] = await pool.query("SELECT * FROM donations WHERE id = ?", [id]);
            const { ofp } = getRes[0];
            const inOfp = ofp + 1;
            if (status === 'Picked') {
                  if (inOfp) {
                        const [result] = await pool.query("UPDATE donations SET picked = ?, trackStatus = ?, lastStatusUpdateBy = ?, lastStatusUpdateDate = ?, ofp = ? WHERE id = ?", [status, 2, name, statusToUtc, inOfp, id]);
                        return res.status(200).json(result)
                  } else {
                        const [result] = await pool.query("UPDATE donations SET picked = ?, trackStatus = ?, lastStatusUpdateBy = ?, lastStatusUpdateDate = ?, ofp = ? WHERE id = ?", [status, 2, name, statusToUtc, 1, id]);
                        return res.status(200).json(result)
                  }

            } else if (status === 'Re-Schedule') {
                  const [result] = await pool.query("UPDATE donations SET subStatus = ?, reScheduleDate = ?, lastStatusUpdateBy = ?, lastStatusUpdateDate = ? WHERE id = ?", [status, scheduleDate, name, statusToUtc, id]);
                  return res.status(200).json(result)

            } else if (status === "Closed") {
                  const [result] = await pool.query("UPDATE donations SET picked = ?, lastStatusUpdateBy = ?, lastStatusUpdateDate = ? WHERE id = ?", [status, name, statusToUtc, id]);
                  return res.status(200).json(result)
            } else {
                  const [result] = await pool.query("UPDATE donations SET subStatus = ?, lastStatusUpdateBy = ?, lastStatusUpdateDate = ? WHERE id = ?", [status, name, statusToUtc, id]);
                  return res.status(200).json(result)
            }
      } catch (error) {
            return res.status(500).json(error)
      }
}
