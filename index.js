const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

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
          console.log("switch done 1");
          break;
        case "Add Employee":
          console.log("switch done 2");
          break;
        case "Update Employee Role":
          console.log("switch done 3");
          break;
        case "View All Roles":
          console.log("switch done 4");
          break;
        case "Add Role":
          console.log("switch done 5");
          break;
        case "View All Departments":
          console.log("switch done 6");
          break;
        case "Add Department":
          console.log("switch done 7");
          break;
        case "Quit":
          console.log("switch done 8");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

manageEmployment();
