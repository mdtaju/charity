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
            const { id, date, skuStatus, generatedBy } = req.body;
            await pool.query("CREATE TABLE IF NOT EXISTS warehouse(id varchar(17) UNIQUE NOT NULL, date varchar(50), inStock_date varchar(30), generatedBy varchar(50), skuStatus varchar(8), isUsable varchar(8), category varchar(15), stockStatus varchar(10), stockReason varchar(200), comment varchar(200), price varchar(20), inStock_update_by varchar(50), stockOut_update_by varchar(50), stockOut_date varchar(50), PRIMARY KEY(id))");
            const [result] = await pool.query("INSERT INTO warehouse SET ?", {
                  id,
                  date,
                  skuStatus,
                  generatedBy
            });
            return res.status(200).json({ ...req.body, id: result.insertId })
      } catch (error) {
            return res.status(500).json(error)
      }
}
