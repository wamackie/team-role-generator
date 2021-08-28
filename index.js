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
        message: "Add a team member?",
        choices: ["Engineer", "Intern", "No"]
    },
])

.then(function(data) {
    switch(choices) {
        case (choices === "Engineer"):
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
          break;
        case (choices === "Intern"):
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
              }
          ])
          break;
        default:
          // code block
      }
})


createTeam()
    .then(addTeamMember)