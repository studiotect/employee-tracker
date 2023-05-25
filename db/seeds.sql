USE employee;

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Marketing'),
    ('Engineering'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Manager', 100000, 1),
    ('Sales Representative', 50000, 1),
    ('Marketing Manager', 90000, 2),
    ('Marketing Coordinator', 40000, 2),
    ('Software Engineer', 120000, 3),
    ('Manager', 130000, 3),
    ('Financial Analyst', 80000, 4),
    ('Accountant', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 6, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Samantha', 'Lee', 4, 1),
    ('Emily', 'Jones', 6, 1),
    ('Olivia', 'Davis', 8, 1),
    ('Chris', 'Wilson', 5, 1),
    ('Ashley', 'Martin', 2, 1);
