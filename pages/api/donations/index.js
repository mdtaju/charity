import { pool } from "../../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case 'GET':
                  return await getFromDatabase(req, res);
            case 'POST':
                  return await sendToDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const getFromDatabase = async (req, res) => {
      try {
            const [result] = await pool.query("SELECT * FROM donations");
            return res.status(200).json(result)
      } catch (error) {
            return res.status(500).json(error)
      }
}

const sendToDatabase = async (req, res) => {
      try {
            const {
                  fullName,
                  phone,
                  productName,
                  productCondition,
                  region,
                  city,
                  district,
                  address,
                  latNum,
                  longNum,
                  trackID,
                  trackStatus,
                  date
            } = req.body;
            await pool.query("CREATE TABLE IF NOT EXISTS donations(fullName varchar(40), phone varchar(10) NOT NULL, productName varchar(40), productCondition varchar(20), region varchar(40), city varchar(50), district varchar(60), address varchar(200), latNum int, longNum int, trackID int UNIQUE AUTO_INCREMENT NOT NULL, trackStatus int, date BIGINT, PRIMARY KEY (trackID))")
            const [result] = await pool.query("INSERT INTO donations SET ?", {
                  fullName,
                  phone,
                  productName,
                  productCondition,
                  region,
                  city,
                  district,
                  address,
                  latNum,
                  longNum,
                  trackID,
                  trackStatus,
                  date
            })
            return res.status(200).json({ ...req.body, id: result.insertId })
      } catch (err) {
            return res.status(500).json({ message: err })
      }
}