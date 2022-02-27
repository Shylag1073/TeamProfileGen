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

    if (teamData.addTeam === 'add an enginer') {
       
            console.log("you're adding an engineer")
        

        inquirer.prompt({
            type: 'input',
            name: 'Engineer1',
            message: "What is your engineer's name?"
        }).then(engData => {
            console.log(engData.Engineer1)
        })

    }

    else if (teamData.addTeam === 'add an enginer') {
       
        console.log("you're adding an engineer")
    

    inquirer.prompt({
        type: 'input',
        name: 'Engineer1',
        message: "What is your engineer's name?"
    }).then(engData => {
        console.log(engData.Engineer1)
    })

}


 };





