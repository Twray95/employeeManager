const inquirer = require("inquirer");
const mysql = require("mysql2");

const positions = function (db, cb) {
  db.promise()
    .query("SELECT title as name, id as value FROM role;")
    .then(function (roleResults) {
      db.promise()
        .query(
          'SELECT CONCAT(first_name, " ", last_name) as name, id as value FROM employee WHERE manager_id IS NULL;'
        )
        .then(function (managerResults) {
          cb(db, roleResults[0], managerResults[0]);
        });
    });
};

const departmentList = function (db, cb) {
  db.promise()
    .query("SELECT name, id as value FROM department;")
    .then(function (depoList) {
      cb(db, depoList[0]);
    });
};

const addDepartment = function (db) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the new department?",
      },
    ])
    .then((response) => {
      db.query(
        `INSERT INTO department (name) VALUES ("${response.name}")`,
        function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
          }
        }
      );
    });
};

const addRole = function (db, departments) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "department_id",
        message: "What department are you adding a role too?",
        choices: departments,
      },
      {
        type: "input",
        name: "title",
        message: "What is the role title?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the role salary?",
      },
    ])
    .then((responses) => {
      db.query(
        `INSERT INTO role (title, salary, department_id) VALUES ("${
          responses.title
        }", ${Number(responses.salary)}, ${responses.department_id})`
      );
    });
};

const addEmployee = function (db, roles, manager) {
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

const addEmployeeFunction = function (db) {
  positions(db, addEmployee);
};

const addRoleFunction = function (db) {
  departmentList(db, addRole);
};

module.exports = { addEmployeeFunction, addDepartment, addRoleFunction };
