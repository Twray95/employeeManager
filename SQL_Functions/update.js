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

// update employee
// query down all employees and all roles
// inquirer which employee to update
// inquirer which role to change to
// .then query UPDATE employee SET role_id = 'answers.role_id' WHERE employee_id = answers.employee_id

const updateEmployeeRole = function (db, cb) {
  db.promise()
    .query(
      "SELECT CONCAT(first_name, ' ', last_name) as name, id as value FROM employee"
    )
    .then(function (employeeResults) {
      db.promise()
        .query("SELECT title as name, id as value FROM role")
        .then(function (roleResults) {
          cb(db, employeeResults[0], roleResults[0]);
        });
    });
};

const inquireRoleUpdate = function (db, employeeList, roleList) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeName",
        message: "Which employee's role would you like to update?",
        choices: employeeList,
      },
      {
        type: "list",
        name: "newRole",
        message: "What is their new role?",
        choices: roleList,
      },
    ])
    .then((answers) => {
      db.query(
        `UPDATE employee SET role_id = ${Number(
          answers.newRole
        )} WHERE id = ${Number(answers.employeeName)}`
      );
    });
};
// .then query UPDATE employee SET role_id = 'answers.role_id' WHERE employee_id = answers.employee_id

const roleUpdate = function (db) {
  updateEmployeeRole(db, inquireRoleUpdate);
};

module.exports = { roleUpdate };
