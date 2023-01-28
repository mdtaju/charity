import jwt from "jsonwebtoken";
import { pool } from "../../../src/config/db";

export default async function handler(req, res) {
      switch (req.method) {
            case "GET":
                  return await getAdminsFromDatabase(req, res);
            case 'POST':
                  return await getFromDatabase(req, res);
            default:
                  return res.status(400).json("Method not allowed")
      }
}

const getAdminsFromDatabase = async (req, res) => {
      try {
            const [results] = await pool.query("SELECT * FROM admins");
            return res.status(200).json(results);
      } catch (error) {
            return res.status(500).json(error);
      }
}

const getFromDatabase = async (req, res) => {
      try {
            const { phone, password } = req.body;
            const [result] = await pool.query("SELECT * FROM admins WHERE phone = ? AND password = ?", [phone, password]);
            if (result.length === 1) {
                  const token = jwt.sign({ userId: phone }, "kie9)$kdie");
                  const { name, role, } = result[0];
                  return res.status(201).json({ token, user: { name, role } });
            } else {
                  return res.status(404).json({ error: "Phone or Password don't match" })
            }
      } catch (error) {
            return res.status(500).json(error)
      }
}
