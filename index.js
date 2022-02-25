const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'manager name?'
    },
])