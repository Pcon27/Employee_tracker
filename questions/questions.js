const initialQuestions = [
    {
        type: "list",
        message: "what would you like to do",
        name: "initialInput",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
    }
]

const employeeQuestions = [
    {
        type: "Input", 
        message: "What is the New Employee's First Name",
        name: "newEmployeeFirstName"
    },
    {
        type: "Input", 
        message: "What is the New Employee's Last Name",
        name: "newEmployeeLastName"
    },
    {
        type: "list", 
        message: "What is the New Employee's Role",
        name: "newEmployeRole",
        choices: []
    },
    {
        type: "list", 
        message: "What is the New Employee's Manager",
        name: "newEmployeeManager",
        choices: [{name: "none", value: null}]
    },
]

const updateEmployeeQuestions = [
    {
        type: "list",
        message: "Which employee's role do you wish to update?",
        name: "updatedEmployeeName",
        choices: []
    },
    {
        type: "list",
        message: "To which role is this employee being assigned?",
        name: "updatedEmployeeRole",
        choices: []
    },
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
        type: "list", 
        message: "Enter New Role's Department",
        name: "roleDepartment",
        choices: []
    }
]



module.exports = {initialQuestions, departmentQuestions, roleQuestions, employeeQuestions, updateEmployeeQuestions}