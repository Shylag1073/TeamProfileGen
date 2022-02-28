const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team managers name?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the team managers ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team managers email?'
    },
    {
        type: 'list',
        message: 'Who would you like to add to your team?',
        name: 'addTeam',
        choices: ['add an enginer', 'add intern', ' none']
    }
]).then(teamData => {
    addingTeammates(teamData)
})

function addingTeammates(teamData) {
    /// adding Enginer promtp////
    if (teamData.addTeam === 'add an enginer') {

        console.log("you're adding an engineer")
        inquirer.prompt([
            {
                type: 'input',
                name: 'Engineer1',
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'Eng1ID',
                message: "What is your engineer's ID?"
            },
            {
                type: 'input',
                name: 'Eng1Email',
                message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: 'Eng1Githib',
                message: "What is your engineer's Github?"
            }
        ]).then(engData => {
            console.log(engData.Engineer1)
        })

    }
    // Adding Intern propmt//////
    else if (teamData.addTeam === 'add intern') {

        console.log("you're adding an Intern")


        inquirer.prompt([
            {
                type: 'input',
                name: 'Intern1',
                message: "What is your Intern's name?"
            },
            {
                type: 'input',
                name: 'Int1ID',
                message: "What is your Intern's ID?"
            },
            {
                type: 'input',
                name: 'Int1Email',
                message: "What is your Intern's email?"
            },
            {
                type: 'input',
                name: 'Int1Githib',
                message: "What is your Intern's Github?"
            }
        ]).then(IntData => {
            console.log(IntData.Intern1)
        })

    }


};





