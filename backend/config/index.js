const sql = require("mssql");
const dotenv = require("dotenv");
require("../.env");

dotenv.config();

const sqlConfig = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  server: process.env.MSSQL_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const dbconn = async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    let conn = await sql.connect(sqlConfig);
    // const result = await sql.query`select * from mytable where id = ${value}`;
    console.log(`Connected to the database: ${process.env.MSSQL_DATABASE}`);
  } catch (error) {
    // ... error checks
    console.log(error);
  }
};

dbconn();

module.exports = sqlConfig;
