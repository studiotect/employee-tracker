const inquirer = require("inquirer");
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'applejuice',
  database: 'employee'
},
console.log(`Connected to the employee database.`)
);


inquirer.prompt([
  {
    type: "list",
    message: "What do you want to do?",
    name: "action", 
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
  }
])
.then((res) => {
  if (res.name === "view all departments"){}
  else if (res.name === "view all roles"){}
  else if (res.name === "view all employees"){}
  else if (res.name === "add a department"){}
  else if (res.name === "add a role"){}
  else if (res.name === "update an employee role"){}
})
   


// define function to view all departments

// define function to view all roles

// define function to view all employees

