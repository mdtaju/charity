import formidable from "formidable";
import fs from "fs/promises";
import moment from "moment/moment";
import path from "path";
import { pool } from "../../src/config/db";
export const config = {
      api: {
            bodyParser: false,
      },
};

const readFile = (req, saveLocally) => {
      const options = {};
      if (saveLocally) {
            options.uploadDir = path.join(process.cwd(), "/public/resources/upload");
            options.filename = (name, ext, path, form) => {
                  const fileName = Date.now().toString() + "_" + path.originalFilename?.slice(0, 10) + path.originalFilename?.slice(-6);
                  return fileName;
            };
      }
      options.maxFileSize = 4000 * 1024 * 1024;
      const form = formidable(options);
      return new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                  if (err) reject(err);
                  resolve({ fields, files });
            });
      });
};

const handler = async (req, res) => {
      try {
            await fs.readdir(path.join(process.cwd() + "/public", "/resources", "/upload"));
            const { files } = await readFile(req, true);
            const persistent = files.myImage;
            const { newFilename } = persistent;
            const toU = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            await pool.query("CREATE TABLE IF NOT EXISTS gallery(id varchar(40) UNIQUE NOT NULL, date varchar(40), PRIMARY KEY(id))");
            await pool.query("INSERT INTO gallery SET id = ?, date = ?", [newFilename, toU]);
            res.json({ done: "Successfully uploaded." });
      } catch (error) {
            await fs.mkdir(path.join(process.cwd() + "/public", "/resources", "/upload"));
            res.status(500).json(error);
      }
};

export default handler;