const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Template = require('./src/template.js');

// create an empty array for saving team profile information
profileArray = []

function initApp(){
    console.log("Let's start creating your team profile!");
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the name of manager: ',
            validate: (managerName) => {
                if(managerName){
                    return true;
                } else {
                    console.log('Please enter the name of manager')
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter the manager's employee ID: ",
            validate: (managerID) => {
                if(managerID){
                    return true;
                } else {
                    console.log("Please enter the manager's employee ID: ")
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the email address of manager: ',
            validate: (managerEmail) => {
                if(managerEmail){
                    return true;
                } else {
                    console.log('Please enter the email address of manager: ')
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Please enter the manager's office number: ",
            validate: (managerOffice) => {
                if(managerOffice){
                    return true;
                } else {
                    console.log("Please enter the manager's office number: ")
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
        profileArray.push(manager);
        addMembers(); // run call addMembers function
    })
}

// addMembers function
function addMembers() {
    // List for choosing members
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role",
            choices: ["Engineer", "Intern", "I'm done!"]
        }
    ]).then(function(listInput){
        if(listInput.role === 'Engineer'){
            addEngineer();
        } else if(listInput.role === 'Intern'){
            addIntern();
        } else{
            renderPage();
        }
    })
}

// Add an engineer to the team
function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter the name of engineer: ',
            validate: (engineerName) => {
                if(engineerName){
                    return true;
                } else {
                    console.log('Please enter the name of engineer: ')
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter the engineer's employee ID: ",
            validate: (engineerID) => {
                if(engineerID){
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID: ")
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter the email address of engineer: ',
            validate: (engineerEmail) => {
                if(engineerEmail){
                    return true;
                } else {
                    console.log('Please enter the email address of engineer: ')
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter the engineer's GitHub handle: ",
            validate: (engineerGithub) => {
                if(engineerGithub){
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub handle: ")
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        profileArray.push(engineer);
        addMembers();
    })
}

// Add an intern to the team
function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter the name of intern: ',
            validate: (internName) => {
                if(internName){
                    return true;
                } else {
                    console.log('Please enter the name of intern')
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter the intern's employee ID: ",
            validate: (internID) => {
                if(internID){
                    return true;
                } else {
                    console.log("Please enter the intern's employee ID: ")
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter the email address of intern: ',
            validate: (internEmail) => {
                if(internEmail){
                    return true;
                } else {
                    console.log('Please enter the email address of intern: ')
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Which school did the intern go?",
            validate: (internSchool) => {
                if(internSchool){
                    return true;
                } else {
                    console.log("Which school did the intern go?")
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        profileArray.push(intern);
        addMembers();
    })
}

// Function to create the team's profile page
function renderPage(){
    console.log("Generating your team profile!")
    fs.writeFileSync('./dist/index.html', Template(profileArray), 'utf-8');
}

// Initialize the team profile generatior
initApp();