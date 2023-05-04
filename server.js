const inquirer = require("inquirer");
const mysql = require('mysql2');
const { printTable } = require("console-table-printer")

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'applejuice',
  database: 'employee'
},
  console.log(`Connected to the employee database.`)
);
function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      message: "What do you want to do?",
      name: "action",
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    }
  ])
    .then((res) => {
      if (res.action === "view all departments") {
        viewDepartments();
      }
      else if (res.action === "view all roles") { 
        viewRoles();
      }
      else if (res.action === "view all employees") { 
        viewEmployee();
      }
      else if (res.action === "add a department") { 
        addDepartment();
      }
      else if (res.action === "add a role") {
        addRole();
       }
      else if (res.action === "update an employee role") { }
    })
}
function viewDepartments() {
  db.query("select * from department", (err, data) => {
    printTable(data);
    mainMenu();
  })
}
function viewRoles(){
  db.query("select * from role", (err, data) => {
    printTable(data);
    mainMenu();
  })
}
function viewEmployee(){
  db.query("select * from employee", (err, data) => {
    printTable(data);
    mainMenu();
  })
}
function addDepartment(){
  inquirer.prompt([
    {
      type: "input",
      message: "What's the name of the Department you want to add?",
      name: "department"
    }
  ])
  .then(res => {
    db.query(`INSERT INTO department (name)
    VALUES ('${res.department}');`, (err) => {
      viewDepartments();
    })
  }) 
}
function addRole(){
  inquirer.prompt([
    {
      type: "input",
      message: "What's the name of the Role you want to add?",
      name: "role",
    },
    {
    type: "input",
    message: "What's the salary?",
    name: "salary",
    },
    {
    type: "input",
    message: "What's the department id?",
    name: "deptId",
    }
  ])
  .then(res => {
    db.query(`INSERT INTO role (title, salary, department_id)
    VALUES ('${res.role}',${res.salary},${res.deptId})`, (err) => {
      viewRoles();
    });
  })
}
mainMenu()


// define function to view all departments

// define function to view all roles

// define function to view all employees

