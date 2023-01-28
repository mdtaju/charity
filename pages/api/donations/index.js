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
            await pool.query("CREATE TABLE IF NOT EXISTS donations(fullName varchar(40), phone varchar(13) NOT NULL, productDescription varchar(60), productCondition varchar(20), city varchar(50), district varchar(60), address varchar(300), latNum varchar(100), longNum varchar(100), id varchar(15) UNIQUE NOT NULL, trackStatus int, clientDate varchar(40), date varchar(40), createdBy varchar(40), driverPhone varchar(10), driverName varchar(40), receivedDate varchar(40), received varchar(15), quickNote varchar(1000), driverRegion varchar(1000), picked varchar(30), subStatus varchar(200), ofp int, assignedBy varchar(40), firstAssignedTime varchar(40), reScheduleDate varchar(40), receivedBy varchar(40), lastStatusUpdateBy varchar(40), lastStatusUpdateDate varchar(40), driver_picked_date varchar(222) NOT NULL, driver_not_picked_date varchar(222) NOT NULL, PRIMARY KEY (id))");
            const [results] = await pool.query("SELECT * FROM donations");
            return res.status(200).json(results)
      } catch (error) {
            return res.status(500).json(error)
      }
}

const sendToDatabase = async (req, res) => {
      try {
            const {
                  fullName,
                  phone,
                  productDescription,
                  productCondition,
                  city,
                  district,
                  address,
                  latNum,
                  longNum,
                  id,
                  trackStatus,
                  receiveDate,
                  date,
                  createdBy,
            } = req.body;
            await pool.query("CREATE TABLE IF NOT EXISTS donations(fullName varchar(40), phone varchar(13) NOT NULL, productDescription varchar(60), productCondition varchar(20), city varchar(50), district varchar(60), address varchar(300), latNum varchar(100), longNum varchar(100), id varchar(15) UNIQUE NOT NULL, trackStatus int, clientDate varchar(40), date varchar(40), createdBy varchar(40), driverPhone varchar(10), driverName varchar(40), receivedDate varchar(40), received varchar(15), quickNote varchar(1000), driverRegion varchar(1000), picked varchar(30), subStatus varchar(200), ofp int, assignedBy varchar(40), firstAssignedTime varchar(40), reScheduleDate varchar(40), receivedBy varchar(40), lastStatusUpdateBy varchar(40), lastStatusUpdateDate varchar(40), driver_picked_date varchar(222) NOT NULL, driver_not_picked_date varchar(222) NOT NULL, PRIMARY KEY (id))")
            const [result] = await pool.query("INSERT INTO donations SET ?", {
                  fullName,
                  phone,
                  productDescription,
                  productCondition,
                  city,
                  district,
                  address,
                  latNum,
                  longNum,
                  id,
                  trackStatus,
                  clientDate: receiveDate,
                  date,
                  createdBy,
                  picked: "created"
            })
            return res.status(200).json({ ...req.body, id: result.insertId })
      } catch (err) {
            return res.status(500).json({ message: err })
      }
}