const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const { manageEmployment } = require("../index");

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "employment_db",
  },
  console.log(`Connected to the employment_db database.`)
);

const viewAllEmployees = function () {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
  });
  //   manageEmployment();
};

const viewAllDepartments = function () {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
  });
  //   manageEmployment();
};

const viewAllRoles = function () {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
  });
  //   manageEmployment();
};

// viewAllEmployees();

module.exports = { viewAllEmployees, viewAllDepartments, viewAllRoles };
