import { pool } from "../../src/config/db";

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
            await pool.query("CREATE TABLE IF NOT EXISTS tracking_history(id int AUTO_INCREMENT NOT NULL UNIQUE, status varchar(30), date varchar(40), description varchar(40), operation varchar(30), trackingID varchar(17), phone varchar(10), PRIMARY KEY (id))");
            const [results] = await pool.query("SELECT * FROM tracking_history");
            return res.status(200).json(results)
      } catch (error) {
            return res.status(500).json(error)
      }
}

const sendToDatabase = async (req, res) => {
      try {
            const {
                  id,
                  date,
                  status,
                  description,
                  operation,
                  phone
            } = req.body;
            await pool.query("CREATE TABLE IF NOT EXISTS tracking_history(id int AUTO_INCREMENT NOT NULL UNIQUE, status varchar(30), date varchar(40), description varchar(40), operation varchar(30), trackingID varchar(17), phone varchar(10), PRIMARY KEY (id))")
            const [result] = await pool.query("INSERT INTO tracking_history SET ?", {
                  trackingID: id,
                  date,
                  status,
                  description,
                  operation,
                  phone
            })
            console.log(result)
            return res.status(200).json({ ...req.body, id: result.insertId })
      } catch (err) {
            console.log(err)
            return res.status(500).json({ message: err })
      }
}