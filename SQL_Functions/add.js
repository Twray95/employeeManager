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

const positions = function (cb) {
  db.promise()
    .query("SELECT title as name, id as value FROM role;")
    .then(function (roleResults) {
      db.promise()
        .query(
          'SELECT CONCAT(first_name, " ", last_name) as name, id as value FROM employee WHERE manager_id IS NULL;'
        )
        .then(function (managerResults) {
          cb(roleResults[0], managerResults[0]);
        });
    });
};

const addEmployee = function (roles, manager) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is the employee position",
        choices: roles,
      },
      {
        type: "list",
        name: "manager_id",
        message: "Does this employee have a manager",
        choices: [...manager, "null"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role_id}, ${answers.manager_id});`,
        function (err, results) {
          console.log(results);
        }
      );
    });
};

const addEmployeeFunction = function () {
  positions(addEmployee);
};

module.exports = { addEmployeeFunction };
