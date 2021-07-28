USE company_db;

INSERT INTO department (name)
VALUES ("sales"),
       ("engineering"),
       ("finance"),
       ("legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 150000.00, 4),
        ("salesperson", 100000.00, 1),
        ("Lead Engineer", 150000.00, 2),
        ("Accountant", 125000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, 1),
        ("Sally", "Jones", 2, 2),
        ("Henry", "Hoover", 3, 3),
        ("Sam", "Johnson", 4, 3);