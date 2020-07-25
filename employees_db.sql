DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
id INTEGER NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(
id INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(6,0) NOT NULL,
department_id INTEGER(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee(
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id VARCHAR(30) NOT NULL,
manager_id VARCHAR(30),
PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ulf", "Erstenschlager", 6, NULL),
("Zilchina", "Alleslieber", 7, 1),
("Troy", "McCloyerson", 8, 1);

INSERT INTO role (title, salary, department_id )
VALUES ("HR clerk", 10000, 1),
("Interpreter", 30000, 2),
("Accountant", 50000, 3);

INSERT INTO department (department_name)
VALUES ("Contract Worker"),
("Human Resources"),
("Accounts Receivable");