var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
        .prompt({
            name: "startCommand",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all employees", "View all roles", "View all departments", "Add employee", "Add role", "Add department", "Update employee role", "Exit"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.startCommand === "View all employees") {
                ViewAllEmployees();
            }
            else if (answer.startCommand === "View all roles") {
                ViewAllRoles();
            }
            else if (answer.startCommand === "View all departments") {
                ViewAllDepartments();
            }
            else if (answer.startCommand === "Add employee") {
                CreateNewEmployee();
            }
            else if (answer.startCommand === "Add role") {
                //   postAuction();
            }
            else if (answer.startCommand === "Add department") {
                //   postAuction();
            }
            else if (answer.startCommand === "Update employee role") {
                //   postAuction();
            }
            else {
                connection.end();
            }
        });
}
function ViewAllEmployees() {

    // query the database for all items being auctioned
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        console.log(cTable.getTable(results));
        start();
        // function to handle posting new items up for auction
    });
}
function ViewAllRoles() {

    // query the database for all items being auctioned
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        console.log(cTable.getTable(results));
        start();
        // function to handle posting new items up for auction
    });
}
function ViewAllDepartments() {

    // query the database for all items being auctioned
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.log(cTable.getTable(results));
        start();
        // function to handle posting new items up for auction
    });
}


function CreateNewEmployee() {
let roles = ["Contract Worker", "Human Resources", "Accounts Receivable"]
let manager = ["No manager","Mrs. Aetch Are", "Sir Meistro Contractor", "Mr. Account Lord" ]

    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role",
                type: "list",
                message: "What is the employee's role?",
                choices: roles
            },
            {
                name: "manager",
                type: "list",
                message: "Who is the employee's manager?",
                choices: manager
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.role,
                    manager_id: answer.manager
                },
                function (err) {
                    if (err) throw err;
                    console.log("New employee was created successfully!");
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
}
const table = cTable.getTable([
    {
        name: 'foo',
        age: 10
    }, {
        name: 'bar',
        age: 20
    }
]);

console.log(table);

  // prints
//   name  age
//   ----  ---
//   foo   10
//   bar   20

//   https://www.npmjs.com/package/console.table