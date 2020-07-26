DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(6,0) NOT NULL,
department_id INT(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT(30),
PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ulf", "Erstenschlager", 1, NULL),
("Zilchina", "Alleslieber", 1, NULL),
("Troy", "McCloyerson", 1, NULL),
("Little", "Managedman", 2, 1);

INSERT INTO role (title, salary, department_id )
VALUES ("Manager", 90000, 1),
("HR clerk", 10000, 2),
("Accountant", 50000, 3);

INSERT INTO department (department_name)
VALUES ("Managerial Department"),
("Human Resources"),
("Accounts Receivable");