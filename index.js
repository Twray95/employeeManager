const inquirer = require("inquirer");
const mysql = require("mysql2");
const {
  viewAllEmployees,
  viewAllDepartments,
  viewAllRoles,
} = require("./SQL_Functions/view");
const {
  addEmployeeFunction,
  addDepartmentFunction,
} = require("./SQL_Functions/add");

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "employment_db",
  },
  console.log(`Connected to the employment_db database.`)
);

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
          viewAllEmployees(db);
          break;
        case "Add Employee":
          addEmployeeFunction(db);
          break;
        case "Update Employee Role":
          console.log("Update Employee Role");
          break;
        case "View All Roles":
          viewAllRoles(db, manageEmployment);
          break;
        case "Add Role":
          console.log("Add Role");
          break;
        case "View All Departments":
          viewAllDepartments(db, manageEmployment);
          break;
        case "Add Department":
          addDepartmentFunction(db);
          break;
        case "Quit":
          quit();
          break;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const quit = function () {
  console.log("quit");
  return process.exit();
};

manageEmployment();
