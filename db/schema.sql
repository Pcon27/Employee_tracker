DROP TABLE IF EXISTS departments; 
DROP TABLE IF EXISTS roles;
DROP TABLE OF EXISTS departments;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT, 
    department_name VARCAHR(50) NOT NULL
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(50) NOT NULL, 
    salary DECIMAL NOT NULL, 
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT DEFAULT NULL, 
    FOREIGN KEY (role_id) REFERENCES roles (id), 
    FOREIGN KEY (manager_id) REFERENCES employees(id)
    PRIMARY KEY (id)
)