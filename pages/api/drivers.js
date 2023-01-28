import { pool } from "../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case "GET":
                  return await getFromDatabase(req, res);
            case "POST":
                  return await sendToDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const getFromDatabase = async (req, res) => {
      try {
            const [results] = await pool.query("SELECT * FROM drivers");
            return res.status(200).json(results);
      } catch (error) {
            return res.status(500).json(error)
      }
}

const sendToDatabase = async (req, res) => {
      try {
            const { name, phone, password, location, date } = req.body;
            await pool.query("CREATE TABLE IF NOT EXISTS drivers(name varchar(40), phone varchar(10) UNIQUE NOT NULL, password varchar(20), location varchar(200), date varchar(60), PRIMARY KEY (phone))");
            const [result] = await pool.query("INSERT INTO drivers SET ?", {
                  name,
                  phone,
                  password,
                  location,
                  date
            })
            return res.status(200).json({ ...req.body, id: result.insertId });
      } catch (error) {
            return res.status(500).json(error)
      }
}