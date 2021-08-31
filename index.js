const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const framework = require("./src/framework")
let team = [];

const createManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ])
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        console.log(manager);
        createTeamMember();
    });
};

const createTeamMember = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Add a team member?",
            choices: ["Engineer", "Intern", "No"]
        },
    ])
    .then(data => {
        console.log(data);
        if(data.role === "Engineer") {
            createEngineer();
        }
        else if (data.role === "Intern") {
            createIntern();
        } 
        else generateTeam();
    })
};

const createEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github?"
        },
    ])
    .then(data => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        console.log(engineer);
        createTeamMember();
    })
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
    ])
    .then(data => {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        console.log(intern);
        createTeamMember();
    })
}

const generateTeam = () => {
    fs.writeFileSync ('./dist/index.html', framework(team), 'utf-8')
    console.log('Team Profile Succesfully Created in the Dist Folder')
}

createManager()