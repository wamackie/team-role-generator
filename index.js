const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];

const createManager = () => {
    return inquirer.prompt([
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
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Add a team member?",
            choices: ["Engineer", "Intern", "No"]
        }
    ])
    .then(newMember => {
        switch (newMember.role) {
        case "Engineer":
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
                }
            ])
            .then(data => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                team.push(engineer);
                console.log(engineer);
                createTeamMember();
            })
            break;

        case "Intern":
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
                const intern = new Intern(data.name, data.id, data.email, data.school);
                team.push(intern);
                console.log(intern);
                createTeamMember();
            })
            break;
        default:
        }
    })
}

createManager();
