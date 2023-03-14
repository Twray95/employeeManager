INSERT INTO department (name)
VALUES ("Engineering"), ("Sales"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 2), ("Salesperson", 80000, 2), ("Lead Engineer", 150000, 1), ("Software Engineer", 120000, 1), ("Account Manager", 160000, 3), ("Accountant", 125000, 3), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tommy", "Wray", 1, null), ("Michael", "Wray", 2, 1), ("Travis", "Weeks", 3, null), ("Colin", "Kay", 4, 3), ("Wes", "Kay", 5, null), ("John", "Doe", 6, 5), ("Jane", "Doe", 7, null), ("Glow", "Reynolds", 8, 7);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;


