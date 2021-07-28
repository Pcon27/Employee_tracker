const inquirer = require("inquirer")
const cTable = require("console.table")
const mysql = require("mysql2")
// const { questions } = require("./questions/questions")
// const { response } = require("./utils/showResponse")
require('dotenv').config()
// const mysql = require("mysql")
const {initialQuestions, departmentQuestions, roleQuestions, employeeQuestions, updateEmployeeQuestions} = require(`./questions/questions`) 
const choices = roleQuestions[2].choices

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "company_db",
    password: process.env.USER_PW
}, 
console.log("wawaweewa")
);
  


function promptQuestions () {
    inquirer.prompt(initialQuestions)
    .then(answer => {
        (answer.initialInput === "View All Employees") ? showAllEmp() :
        (answer.initialInput === "Add Employee") ? addEmp() : 
        (answer.initialInput === "Update Employee Role") ? updEmp() :
        (answer.initialInput === "View All Roles") ? showAllRol() :  
        (answer.initialInput === "Add Role") ? addRol() : 
        (answer.initialInput === "View All Departments") ? showAllDep() : 
        (answer.initialInput === "Add Department") ? addDep() : exit()

    })
}

// SHOW
function showAllEmp(){
    connection.query(`SELECT employee.id, employee.first_name AS first, employee.last_name AS last, role.title AS role, role.salary AS salary, department.name AS department, employee.manager_id AS manager FROM employee
       JOIN role
       ON employee.role_id = role.id 
       JOIN department
       ON role.department_id = department.id
       JOIN employee
       ON employee.manager_id = employee.id`, 
       
       (err, data) => {
        console.table(data)
        promptQuestions()
    })
}

// ADD
function addEmp(){

    connection.promise().query(`SELECT * FROM role`)
    .then(data => {
        let textRow = data[0]

    for (var i=0; i < textRow.length; i++){
        employeeQuestions[2].choices.push({name: textRow[i].title, value: textRow[i].id})
    };

    connection.promise().query(`SELECT first_name, last_name, id FROM employee`)
    .then(data => {
        let textRow = data[0]

    for (var i=0; i < textRow.length; i++){
        employeeQuestions[3].choices.push({name: textRow[i].first_name + " " + textRow[i].last_name, value: textRow[i].id})
    };
});
});



    inquirer.prompt(employeeQuestions)

    .then (answer => {
    
    console.log(answer)
    connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("${answer.newEmployeeFirstName}", "${answer.newEmployeeLastName}", ${answer.newEmployeRole}, ${answer.newEmployeeManager});`, (err, data) => {
        console.log("New Employee Added!")
        promptQuestions()
    })
});
};




// ADD

function updEmp(){

    connection.promise().query(`SELECT first_name, last_name, id FROM employee`)
    .then(data => {
        let textRow = data[0]

    for (var i=0; i < textRow.length; i++){
        updateEmployeeQuestions[0].choices.push({name: textRow[i].first_name + " " + textRow[i].last_name, value: textRow[i].id})
    };


    connection.promise().query(`SELECT * FROM role`)
    .then(data => {
        let textRow = data[0]

    for (var i=0; i < textRow.length; i++){
        updateEmployeeQuestions[1].choices.push({name: textRow[i].title, value: textRow[i].id})     
    };
    
    inquirer.prompt(updateEmployeeQuestions)

    .then (answer => {
    
    console.log(answer)
    connection.query(`UPDATE employee
    SET role_id = "${answer.updatedEmployeeRole}"
    WHERE id = ${answer.updatedEmployeeName};`)
    promptQuestions()
    })
});
    
});
};



// SHOW
function showAllRol(){
    connection.query(`SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        LEFT JOIN department
        on role.department_id = department.id`, (err, data) => {
        console.table(data)
        promptQuestions()
    })
}

//ADD







function addRol(){

    connection.promise().query(`SELECT * FROM department`)
    .then(data => {
        let textRow = data[0]

    for (var i=0; i < textRow.length; i++){
        roleQuestions[2].choices.push({name: textRow[i].name, value: textRow[i].id})
    };
    });
    inquirer.prompt(roleQuestions)

    .then (answer => {
    connection.query(`INSERT INTO role (title, salary, department_id)
    VALUES ("${answer.roleName}", ${answer.roleSalary}, ${answer.roleDepartment})`, (err, data) => {
    console.table("Role Updated!")
    promptQuestions()
    })
})
}









// SHOW
function showAllDep(){
    connection.query(`SELECT * from department`, (err, data) => {
        console.table(data)
        promptQuestions()
})
}


// ADD
function addDep(answer){


    inquirer.prompt(departmentQuestions)

    .then (answer => {
    choices.push(answer.departmentName)
    connection.query(`INSERT INTO department (name)
    VALUES ("${answer.departmentName}")`)
    console.log("Department Updated!")
    promptQuestions()
    })
}

function exit(){
    console.log("exited")
    process.exit(0)
}

promptQuestions()









