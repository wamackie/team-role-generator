const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const createTeam = () => inquirer.prompt([
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

const addTeamMember = () => inquirer.prompt([
    {
        type: "list",
        name: "role",
        message: "What is the team member's role?",
        choices: ["Employee", "Manager", "Engineer", "Manager"]
    },
    {
        type: "input",
        name: "name",
        message: "What is the team member's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team member's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team member's email?"
    }
])

createTeam()
    .then(addTeamMember)