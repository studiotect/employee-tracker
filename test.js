
const queries = {
  role: {
    validRole: (res) => `SELECT * FROM role LEFT JOIN department ON role.department_id = department.id WHERE title = '${res.title}' and department.name = '${res.department}'`,
    validDept: (res) => `SELECT * FROM department WHERE name = '${res.department}'`,
    addRole: (res) => `INSERT INTO role (title, salary, department_id) VALUES ('${res.title}', ${res.salary}, ${res[0].id})`
  },
}

const prompts = {
  addRole: [
    {
      type: "input",
      message: "What's the name of the Role you want to add?",
      name: "title",
    },
    {
      type: "input",
      message: "What's the salary?",
      name: "salary",
    },
    {
      type: "input",
      message: "What's the department?",
      name: "department",
    }
  ]
}

function actuallyAddRole(res) {
  db.query(queries.role.addRole(res), function (err, res) {
    if (err) tryAgain(err);
    else {
      console.log("Role added successfully!");
      mainMenu();
    }
  })
}

function addRole() {
  inquirer.prompt(prompts.addRole)
    .then(function (res) {
      db.query(queries.role.validRole(res), function (err, res) {
        if (res.length > 0) tryAgain("Role already exists.");
        else db.query(queries.role.validDept(res), function (err, res) {
          if (res.length === 0) tryAgain("Department does not exist.");
          else actuallyAddRole(res)
        });
      });
    });
}

function tryAgain(msg) {
  if (msg) console.log(msg)
  inquirer.prompt({
    type: "list",
    message: "Would you like to try again?",
    name: "again",
    choices: ["Yes", "No"]
  }).then(function (choice) {
    if (choice.again === "Yes") {
      addRole();
    } else {
      mainMenu();
    }
  });
}
