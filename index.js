const inquirer = require("inquirer")
const cTable = require("console.table")
const sql = require("mysql2")
const { questions } = require("./questions/questions")
const { response } = require("./utils/showResponse")

const connection = mysql.createConnections({
    host: "localhost",
    database: "./db/schema"
    password: ""
})