USE employee;

INSERT INTO department (id, name)
VALUES
    (1, 'Sales'),
    (2, 'Marketing'),
    (3, 'Engineering'),
    (4, 'Finance');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Sales Manager', 100000, 1),
    (2, 'Sales Representative', 50000, 1),
    (3, 'Marketing Manager', 90000, 2),
    (4, 'Marketing Coordinator', 40000, 2),
    (5, 'Software Engineer', 120000, 3),
    (6, 'Product Manager', 130000, 3),
    (7, 'Financial Analyst', 80000, 4),
    (8, 'Accountant', 60000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'John', 'Doe', 1, NULL),
    (2, 'Jane', 'Smith', 2, 1),
    (3, 'Alex', 'Johnson', 3, NULL),
    (4, 'Samantha', 'Lee', 4, 3),
    (5, 'David', 'Kim', 5, NULL),
    (6, 'Emily', 'Jones', 6, 5),
    (7, 'Mike', 'Brown', 7, NULL),
    (8, 'Olivia', 'Davis', 8, 7),
    (9, 'Chris', 'Wilson', 5, 6),
    (10, 'Ashley', 'Martin', 2, 1);
