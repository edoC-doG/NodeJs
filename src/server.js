//import
require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const connection = require("./config/database")
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config template engine ,config static files
configViewEngine(app);

//Khai bao route
app.use("/", webRoutes);

//TEST CONNECTION
// connection.query(
//   'SELECT * FROM Users u ',
//   function (err, result, fields) {
//     console.log("result", result)
//   }
// )
connection()

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
