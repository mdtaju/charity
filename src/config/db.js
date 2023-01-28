import { createPool } from "mysql2/promise";
const pool = createPool({
      host: "localhost",
      user: "rhma_rhma",
      // user: "root",
      password: "I&5eF;4]cSr_",
      database: "rhma_rhma"
      // database: "charity"
})
export { pool };

