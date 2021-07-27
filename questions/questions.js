const initialQuestions = [
    {
        type: "list",
        message: "what would you like to do",
        name: "initialInput",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
    }
]

const departmentQuestions = [
    {
        type: "Input", 
        message: "Enter New Department Name",
        name: "departmentName"
    }
]

const roleQuestions = [
    {
        type: "Input", 
        message: "Enter New Role Name",
        name: "roleName"
    },
    {
        type: "Input", 
        message: "Enter New Role Salary",
        name: "roleSalary"
    },
    {
        type: "List", 
        message: "Enter New Role's Department",
        name: "roleDepartment",
        choices: []
    }
]

const employeeQuestions = [
    {
        type: "Input", 
        message: "What is the New Employee's First Name",
        name: "employeeFirstName"
    },
    {
        type: "Input", 
        message: "What is the New Employee's Last Name",
        name: "employeeLastName"
    },
    {
        type: "list", 
        message: "What is the New Employee's Role",
        name: "employeeNewRole",
        choices: []
    },
    {
        type: "list", 
        message: "What is the New Employee's Manager",
        name: "employeeManager",
        choices: []
    },
]

module.exports = {initialQuestions, departmentQuestions, roleQuestions, employeeQuestions}