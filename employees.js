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
                //   postAuction();
            }
            if (answer.startCommand === "View all roles") {
                //   bidAuction();
            }
            if (answer.startCommand === "View all departments") {
                //   postAuction();
            }
            if (answer.startCommand === "Add employee") {
                CreateNewEmployee();
            }
            if (answer.startCommand === "Add role") {
                //   postAuction();
            }
            if (answer.startCommand === "Add department") {
                //   postAuction();
            }
            if (answer.startCommand === "Update employee role") {
                //   postAuction();
            }
            else {
                connection.end();
            }
        });
}

// function to handle posting new items up for auction
function CreateNewEmployee() {
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
                choices: ["Contract Worker", "Human Resources", "Accounts Receivable"]
            },
            {
                name: "manager",
                type: "list",
                message: "Who is the employee's manager?",
                choices: ["Mrs. Aetch Are", "Sir Meistro Contractor", "Mr. Account Lord", "No manager"]
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO auctions SET ?",
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