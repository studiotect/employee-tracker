-- all departments
SELECT *
FROM department;

-- view all roles
SELECT *
FROM roles;

-- view all employees
SELECT *
FROM employees;

-- add a department
INSERT INTO department (id, name)
VALUES (5, 'Customer Service');

-- add a role, 
INSERT INTO role (id, title, salary, department_id)
VALUES (9, 'Customer Service Manager', 75000, 5);

-- add an employee
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (11, 'Sarah', 'Johnson', 9, 1);

-- update an employee role
UPDATE employee
SET role_id = 6
WHERE id = 11;
