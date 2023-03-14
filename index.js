const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const manageEmployment = function () {
  inquirer.prompt([
    {
      type: "list",
      name: "listChoice",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    },
  ]);
};
