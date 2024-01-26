//import
require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express();
const mysql = require('mysql2')
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;
//config template engine ,config static files
configViewEngine(app);

//Khai bao route
app.use("/", webRoutes);

//TEST CONNECTION
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'hoidanit',
  port: 3307
})

connection.query(
  'SELECT * FROM Users u ',
  function (err, result, fields) {
    console.log("result", result)
    console.log("fields", fields)
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
