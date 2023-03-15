const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "employment_db",
  },
  console.log(`Connected to the employment_db database.`)
);

const viewAllEmployees = function (cb) {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    cb();
  });
};

const viewAllDepartments = function (cb) {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    cb();
  });
};

const viewAllRoles = function (cb) {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    cb();
  });
};

module.exports = { viewAllEmployees, viewAllDepartments, viewAllRoles };
