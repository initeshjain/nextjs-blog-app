const mysql = require("mysql2");

export const connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  ssl: { rejectUnauthorized: true },
  timezone: "Z",
});
