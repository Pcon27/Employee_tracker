const inquirer = require("inquirer")
const cTable = require("console.table")
const mysql = require("mysql2")
const { questions } = require("./questions/questions")
// const { response } = require("./utils/showResponse")
require('dotenv').config()
// const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "company_db",
    password: process.env.USER_PW
}, 
console.log("wawaweewa")
);
  
connection.query("select * from department", (err, data) => {
    console.log(data)
})