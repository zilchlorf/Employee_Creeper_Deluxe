DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
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
role_id INTEGER(30) NOT NULL,
manager_id INTEGER,
PRIMARY KEY (id)
);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ulf", "Erstenschlager", 6, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Zilchina", "Alleslieber", 7, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Troy", "McCloyerson", 8, 1);

INSERT INTO role (title, salary, department_id )
VALUES ("HR Manager", 10000, 1);

INSERT INTO role (title, salary, department_id )
VALUES ("Interpreter", 30000, 2);

INSERT INTO role (title, salary, department_id )
VALUES ("Accountant", 50000, 3);

INSERT INTO department (name)
VALUES ("Contract Worker");

INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO department (name)
VALUES ("Accounts Receivable");