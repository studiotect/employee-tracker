const prompts = {
  mainMenu: [
    {
      type: "list",
      message: "What do you want to do?",
      name: "action",
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    },
  ],
  addDepartment: [
    {
      type: "input",
      message: "What's the name of the Department you want to add?",
      name: "department",
    },
  ],
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
    },
  ],
  addEmployee: [
    {
      type: "input",
      message: "What's the first name of the Employee you want to add?",
      name: "fname",
    },
    {
      type: "input",
      message: "What's the last name of the Employee you want to add?",
      name: "lname",
    },
    {
      type: "input",
      message: "What's the role id?",
      name: "roleId",
    },
    {
      type: "input",
      message: "What's the manager id?",
      name: "managerId",
    }
  ],
  updateEmployee: [
    {
      type: "input",
      message: "What's the first name of the Employee you want to update?",
      name: "fname",
    },
    {
      type: "input",
      message: "What's the last name of the Employee you want to update?",
      name: "lname",
    },
    {
      type: "input",
      message: "What's the new role of the employee you want to update?",
      name: "role",
    },
    {
      type: "input",
      message: "Who is the manager of the employee?",
      name: "managerName",
    },
  ],
  updateEmployeeRole: [
    {
      type: "input",
      message: "What's the first name of the employee you want to update?",
      name: "fname",
    },
    {
      type: "input",
      message: "What's the last name of the employee you want to update?",
      name: "lname",
    },
    {
      type: "input",
      message: "What's the new role of the employee?",
      name: "role",
    },
    {
      type: "input",
      message: "What's the full name of the employee's manager?",
      name: "managerName",
    },
  ],
  tryAgain: [
    {
      type: "list",
      message: "Would you like to try again?",
      name: "again",
      choices: ["Yes", "No"],
    },
  ],
}
module.exports = { prompts };