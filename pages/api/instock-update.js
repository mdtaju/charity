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
            const { id, name, date, condition, category, skuStatus, stockStatus } = req.body;
            await pool.query("CREATE TABLE IF NOT EXISTS warehouse(id varchar(17) UNIQUE NOT NULL, date varchar(50), inStock_date varchar(30), generatedBy varchar(50), skuStatus varchar(8), isUsable varchar(8), category varchar(15), stockStatus varchar(10), stockReason varchar(200), comment varchar(200), price varchar(20), inStock_update_by varchar(50), stockOut_update_by varchar(50), stockOut_date varchar(50), PRIMARY KEY(id))");
            const [getStock] = await pool.query("SELECT * FROM warehouse WHERE id = ?", [id]);
            let stockOut;
            let wrongSku;
            if (getStock.length !== 0) {
                  wrongSku = false
                  if (getStock[0].stockStatus === "stock-out") {
                        stockOut = true
                  } else {
                        stockOut = false
                  }
            } else {
                  wrongSku = true
            }
            if (wrongSku) {
                  return res.status(200).json({ isSuccess: false, message: "Wrong SKU input. Please try again." })
            }
            if (!stockOut) {
                  const [result] = await pool.query("UPDATE warehouse SET inStock_update_by = ?, inStock_date = ?, isUsable = ?, category = ?, skuStatus = ?, stockStatus = ? WHERE id = ?", [name, date, condition, category, skuStatus, stockStatus, id]);
                  return res.status(200).json({ isSuccess: result.changedRows, message: "" })
            } else {
                  return res.status(200).json({ isSuccess: false, message: "This product is already out of stock" })
            }
      } catch (error) {
            return res.status(500).json(error)
      }
}
