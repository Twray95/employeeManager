const viewAllEmployees = function (db, cb) {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    cb();
  });
};

const viewAllDepartments = function (db, cb) {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    cb();
  });
};

const viewAllRoles = function (db, cb) {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    cb();
  });
};

module.exports = { viewAllEmployees, viewAllDepartments, viewAllRoles };
