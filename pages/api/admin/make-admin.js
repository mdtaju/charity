import bcrypt from 'bcryptjs';
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
            const { name, phone, password, role, date } = req.body;
            await pool.query("CREATE TABLE IF NOT EXISTS admins(name varchar(40), phone varchar(12) UNIQUE NOT NULL, password varchar(20), role varchar(20), date varchar(60), PRIMARY KEY (phone))");
            const hashPassword = await bcrypt.hash(password, 12);
            const [result] = await pool.query("INSERT INTO admins SET ?", {
                  name, phone, password, role, date
            });
            return res.status(200).json({ ...req.body, id: result.insertId })
      } catch (error) {
            return res.status(500).json(error)
      }
}
