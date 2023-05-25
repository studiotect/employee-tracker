const inquirer = require("inquirer");
const mysql = require('mysql2');
const { printTable } = require("console-table-printer")
const { prompts } = require("./lib/prompts.js");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'applejuice',
  database: 'employee'
},
  console.log(`Connected to the employee database.`)
);

const queries = {
  role: {
    validRole: (res) => `SELECT * FROM role LEFT JOIN department ON role.department_id = department.id WHERE title = '${res.title}' and department.name = '${res.department}'`,
    validDept: (res) => `SELECT * FROM department WHERE name = '${res.department}'`,
    addRole: (res, results) => `INSERT INTO role (title, salary, department_id) VALUES ('${res.title}', ${res.salary}, ${results[0].id})`,
    getManager: (res, results) => `SELECT * FROM employee`,
  },
  employee: {
    validEmployee: (res) => `select first_name, last_name from employee WHERE first_name = '${res.fname}' AND last_name = '${res.lname}'`,
    addEmployee: (res, results) => `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${res.fname}','${res.lname}',${res.role_id},${res.manager_id})`,

  },
}
// `INSERT employee.*, role.title, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
//   FROM employee
//   JOIN role ON employee.role_id = role.id
//   LEFT JOIN employee manager ON employee.manager_id = manager.id
//   WHERE employee.first_name = '${fname}'
//       AND employee.last_name = '${lname}'
//       AND role.title = '${role}'
//       AND CONCAT(manager.first_name, ' ', manager.last_name) = '${managerName}';`

function mainMenu() {
  inquirer.prompt(prompts.mainMenu)
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
      else if (res.action === "add an employee") {
        addEmployee();
      }
      else if (res.action === "update an employee role") {
        updateEmployeeRole();
      }
    })
}
function viewDepartments() {
  db.query("select * from department", (err, data) => {
    printTable(data);
    mainMenu();
  })
}
function viewRoles() {
  db.query("select * from role", (err, data) => {
    printTable(data);
    mainMenu();
  })
}
function viewEmployee() {
  db.query("select * from employee", (err, data) => {
    printTable(data);
    mainMenu();
  })
}
function addDepartment() {
  inquirer.prompt(prompts.addDepartment)
    .then(res => {
      db.query(`INSERT INTO department (name)
    VALUES ('${res.department}');`, (err) => {
        viewDepartments();
      })
    })
}



function addRole() {
  inquirer.prompt(prompts.addRole)
    .then(function (res) {
      db.query(queries.role.validRole(res), function (err, results) {
        if (results.length > 0) tryAgain("Role already exists.");
        else {
          db.query(queries.role.validDept(res), function (err, results) {
            if (results.length === 0) tryAgain("Department does not exist.");
            else {
              db.query(queries.role.addRole(res, results), function (err, results) {
                if (err) tryAgain(err);
                else {
                  console.log("Role added successfully!");
                  mainMenu();
                }
              });
            }
          });
        }
      });
    });
}

function tryAgain(msg) {
  if (msg) console.log(msg)
  inquirer.prompt(prompts.tryAgain)
    .then(function (choice) {
      if (choice.again === "Yes") {
        addRole();
      } else {
        mainMenu();
      }
    });
}


function addEmployee() {
  inquirer.prompt(prompts.addEmployee)
    .then(res => {
      // Place relevant code here
      // For example, perform necessary database queries

      db.query(queries.employee.validEmployee(res), (err, results) => {
        if (results.length > 0) {
          tryAgain("Employee already exists.");
        } else {
          db.query(queries.employee.addEmployee(res), (err, results) => {
            if (err) {
              tryAgain(err);
            } else {
              console.log("Employee added successfully!");
              mainMenu();
            }
          });
        }
      });
    }
    )
}
function updateEmployeeRole() {
  inquirer.prompt(prompts.updateEmployeeRole)
    .then(res => {
      const { fname, lname, role, managerName } = res;
      const query = `
              UPDATE employee
              JOIN role ON employee.role_id = role.id
              LEFT JOIN employee manager ON employee.manager_id = manager.id
              SET employee.role_id = role.id,
                  employee.manager_id = manager.id
              WHERE employee.first_name = '${fname}'
                AND employee.last_name = '${lname}'
                AND role.title = '${role}'
                AND CONCAT(manager.first_name, ' ', manager.last_name) = '${managerName}'
            `;
      db.query(query, (err, results) => {
        if (err) {
          tryAgain(err);
        } else {
          console.log("Employee role updated successfully!");
          mainMenu();
        }
      });
    });
}
mainMenu();


// define function to view all departments

// define function to view all roles

// define function to view all employees

