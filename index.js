const fs = require("fs");
const inquirer = require("inquirer");

    // asking for ManagerInfo
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
                type: 'input',
                name: 'manGithub',
                message: "What is your Manager's Github?"
            },
            /// Enginer1 promtp///
            {
                type: 'input',
                name: 'Eng1Name',
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
                name: 'Eng1Github',
                message: "What is your engineer's Github?"
            },

    /// adding Enginer2 promtp////
            {
                type: 'input',
                name: 'Eng2Name',
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'Eng2ID',
                message: "What is your engineer's ID?"
            },
            {
                type: 'input',
                name: 'Eng2Email',
                message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: 'Eng2Github',
                message: "What is your engineer's Github?"
            },

    /// adding Enginer3 promtp////
            {
                type: 'input',
                name: 'Eng3Name',
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'Eng3ID',
                message: "What is your engineer's ID?"
            },
            {
                type: 'input',
                name: 'Eng3Email',
                message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: 'Eng3Github',
                message: "What is your engineer's Github?"
            },
            {
                type: 'input',
                name: 'Int1Name',
                message: "What is your Intern's name?"
            },
            {
                type: 'input',
                name: 'IntID',
                message: "What is your Intern's ID?"
            },
            {
                type: 'input',
                name: 'IntEmail',
                message: "What is your Intern's email?"
            },
            {
                type: 'input',
                name: 'IntGithub',
                message: "What is your Intern's School?"
            },
        ])
        .then(teamData => {
            fs.writeFileSync('./output/index.html', `
            
            <!DOCTYPE html>
            <html>

            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>Team Page</title>
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
             <link rel="stylesheet" href="./Assets/style.css">
        </head>

        <body>
        <section class="hero is-primary">
        <div class="hero-body">
            <p class="ctitle">
                MY TEAM
             </p>
            </div>
        </section>

    <div class="tile is-ancestor">
        <div class="tile is-parent">
        <article class="content">
            <p class="subtitle">
                <strong>Manger: ${teamData.managerName} </strong>
            </p>
            <p class="subtitle">Id: ${teamData.managerID}</p>
            <p class="subtitle">Email:<a href="mailto:Shyla@shyla.com">${teamData.managerEmail}</p>
            <p class="subtitle"> Github: <a href="https://github.com/shylag1073" target="_blank" > ${teamData.manGithub} </a></p>
        </article>
            </div>
    

    <div class="tile is-parent">
        <article class="content">
            <p class="subtitle">
                <strong>Engineer : ${teamData.Eng1Name} </strong>
            </p>
            <p class="subtitle">Id: ${teamData.Eng1ID}</p>
            <p class="subtitle">Email: <a href="mailto:Sheila@shyla.com">${teamData.Eng1Email}</a></p>
            <p class="subtitle"> Github: <a href="https://github.com/" target="_blank" >${teamData.Eng1Github} </a> </p>
            </article>
           </div>

    <div class="tile is-parent">
        <article class="content">
            <p class="subtitle">
                <strong>Engineer: ${teamData.Eng2Name} </strong>
            </p>
            <p>Id: ${teamData.Eng2ID} </p>
            <p>Email: <a href="mailto:Shaila@shyla.com"> ${teamData.Eng2Email} </a></p>
            <p>Github: <a href="https://github.com/" target="_blank" >${teamData.Eng2Github} </a></p>
        </article>
    </div>

    <div class="tile is-parent">
        <article class="content">
            <p class="subtitle">
                <strong>Engineer: ${teamData.Eng3Name} </strong>
            </p>
            <p class="subtitle">Id: ${teamData.Eng3ID} </p>
            <p class="subtitle">Email: <a href="mailto:Shiloh@shyla.com"> ${teamData.Eng3Email} </a></p>
            <p class="subtitle">Github: <a href="https://github.com/" target="_blank" >${teamData.Eng3Github} </a></p>
        </article>
    </div>

    <div class="tile is-parent">
        <article class="content">
            <p class="subtitle">
                <strong>Intern: ${teamData.Int1Name}</strong>
            </p>
            <p class="subtitle"> Id: ${teamData.IntID} </p>
            <p class="subtitle"> Email: <a href="mailto:bob@shyla.com"> ${teamData.IntEmail} </a></p>
            <p class="subtitle">School: ${teamData.IntGithub} </p>
        </article>
    </div>


         </div>
    </body>
</html>
            
            `)
        })
    



