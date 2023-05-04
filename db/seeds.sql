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
    ('Product Manager', 130000, 3),
    ('Financial Analyst', 80000, 4),
    ('Accountant', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Alex', 'Johnson', 3, NULL),
    ('Samantha', 'Lee', 4, 3),
    ('David', 'Kim', 5, NULL),
    ('Emily', 'Jones', 6, 5),
    ('Mike', 'Brown', 7, NULL),
    ('Olivia', 'Davis', 8, 7),
    ('Chris', 'Wilson', 5, 6),
    ('Ashley', 'Martin', 2, 1);
