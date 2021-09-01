// const team = require("../index.js")
//console.log(team);

const createManager = function (manager) {
    return `
<div class="col-5 member-card">
    <div class="title">
        <h4>${manager.name}</h4>
        <h4>Manager</h4>
    </div>
    <div class="content">
        <p class="data-values">ID: ${manager.id}</p>
        <p class="data-values">Email: ${manager.email}</p>
        <p class="data-values">Office Number: ${manager.officeNumber}</p>
    </div>
</div>`
}

const createEngineer = function (engineer) {
    return `
<div class="col-5 member-card">
    <div class="title">
        <h4>${engineer.name}</h4>
        <h4>Engineer</h4>
    </div>
    <div class="content">
        <p class="data-values">ID: ${engineer.id}<p>
        <p class="data-values">Email: ${engineer.email}<p>
        <p class="data-values">Github: ${engineer.github}<p>
    </div>
</div>`
}

const createIntern = function (intern) {
    return `
<div class="col-5 member-card">
    <div class="title">
        <h4>${intern.name}</h4>
        <h4>Intern</h4>
    </div>
    <div class="content">
        <p class="data-values">ID: ${intern.id}<p>
        <p class="data-values">Email: ${intern.email}<p>
        <p class="data-values">School: ${intern.school}<p>
    </div>
</div>
`
}

function createArray(team) {
  const cards = [];
  for (let i = 0; i < team.length; i++){
    if(team[i].getRole() === "Manager") {
      cards.push(createManager(team[i]))
    }
    else if (team[i].getRole() === "Engineer") {
      cards.push(createEngineer(team[i]))
    }
    else {
      cards.push(createIntern(team[i]))
    }
  }
  return cards;
}

function framework(team) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1 id="heading">My Team</h1>
    </header>
    <hero>
        <img src="../assets/images/officespace.jpg" id="office-space" alt="office desk">
    </hero>
    <main>
        <div class="container">
            <div class="row team-members">
              ${createArray(team)}
            </div>
        </div>
    </main>
</body>
</html>`
}

module.exports = framework;