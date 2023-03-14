const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const {
  viewAllEmployees,
  viewAllDepartments,
  viewAllRoles,
} = require("./SQL_Functions/view");

// const db = mysql.createConnection(
//   {
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "employment_db",
//   },
//   console.log(`Connected to the employment_db database.`)
// );

const manageEmployment = function () {
  inquirer
    .prompt([
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
    ])
    .then((answer) => {
      const response = answer.listChoice;
      switch (response) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add Employee":
          console.log("Add Employee");
          break;
        case "Update Employee Role":
          console.log("Update Employee Role");
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Role":
          console.log("Add Role");
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "Add Department":
          console.log("Add Department");
          break;
        case "Quit":
          console.log("Quit");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

manageEmployment();

module.exports = { manageEmployment };
