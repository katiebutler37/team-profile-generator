//all of the packages, modules, files this file will need access to
const fs = require("fs");
const inquirer = require("inquirer");
//not necessary since the Engineer, Intern and Manager classes extend the data they need from Employee
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//start team off as an empty array that we will push data into as we move through the application
const team = []
//connects to generateHTML.js to pass data
const generateHTML = require('./utils/generateHTML.js');

function startPrompts() {
    console.log("Welcome Manager! Ready to build your team? Let's start with some of your information.");
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your name? (Required)",
                //makes answer required
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log('You need to enter your name!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your employee id? (Required)",
                //makes answer required
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log('You need to enter your employee id!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your email address? (Required)",
                //makes answer required
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log('You need to enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your office number? (Required)",
                //makes answer required
                validate: managerOfficeNumberInput => {
                    if (managerOfficeNumberInput) {
                        return true;
                    } else {
                        console.log('You need to enter your office number!');
                        return false;
                    }
                }
            }
        ])
        .then((answers) => {
            //collect answer data (in the same order that the properties are set up in the constructor) and create a new Manager to store those inputs
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            //add to the overall team array
            team.push(manager);
            //call menu to add engineer, intern, or finish webpage
            promptEmployeeType()
        })
}

//menu to add engineer, intern or finish webpage
function promptEmployeeType() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add an intern or an engineer to your team?",
                name: "employeeType",
                choices: ["Intern", "Engineer", "None"]
            }
        ])
        .then((answers) => {
            promptTeamMember(answers);
        })
}

function promptTeamMember(answers) {
    //if Intern was selcted, these prompts will be presented
    if (answers.employeeType === "Intern") {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name? (Required)",
                    //makes answer required
                    validate: internNameInput => {
                        if (internNameInput) {
                            return true;
                        } else {
                            console.log('You need to enter the name of your intern!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is your intern's employee id? (Required)",
                    //makes answer required
                    validate: internIdInput => {
                        if (internIdInput) {
                            return true;
                        } else {
                            console.log('You need to enter the employee id for your intern!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your intern's email address? (Required)",
                    //makes answer required
                    validate: internEmailInput => {
                        if (internEmailInput) {
                            return true;
                        } else {
                            console.log('You need to enter the email address for your intern!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What educational institution does your intern attend? (Required)",
                    //makes answer required
                    validate: internSchoolInput => {
                        if (internSchoolInput) {
                            return true;
                        } else {
                            console.log('You need to enter the school that your intern goes to!');
                            return false;
                        }
                    }
                }
            ])
            .then((answers) => {
                //capture data and store it in a new intern object
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                //add new intern obj to the team array
                team.push(intern);
                //return to menu
                promptEmployeeType();
            })
    }
    //if Engineer was selcted, these prompts will be presented
    if (answers.employeeType === "Engineer") {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is your engineer's name? (Required)",
                    //makes answer required
                    validate: engineerNameInput => {
                        if (engineerNameInput) {
                            return true;
                        } else {
                            console.log('You need to enter the name of your engineer!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is your engineer's employee id? (Required)",
                    //makes answer required
                    validate: engineerIdInput => {
                        if (engineerIdInput) {
                            return true;
                        } else {
                            console.log('You need to enter the employee id for your engineer!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your engineer's email address? (Required)",
                    //makes answer required
                    validate: engineerEmailInput => {
                        if (engineerEmailInput) {
                            return true;
                        } else {
                            console.log('You need to enter the email address for your engineer!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "What is your engineer's GitHub account? (Required)",
                    //makes answer required
                    validate: engineerGitHubInput => {
                        if (engineerGitHubInput) {
                            return true;
                        } else {
                            console.log('You need to enter the GitHub account associated with your engineer!');
                            return false;
                        }
                    }
                }
            ])
            .then((answers) => {
                //capture data and store it in a new engineer object
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
                //add engineer obj to team array
                team.push(engineer);
                //return to menu
                promptEmployeeType();
            })
    }
    //if None was selcted, the manager is finished (no more team members) and the webpage will generate
    else {
        console.log("Webpage generated! Please see the index.html file in the dist folder to review your team.")
        fs.writeFile('./dist/index.html', generateHTML(team), err => {
            if (err) throw err;    
        });
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error
            if (err) throw err;
        });
    }
}

// Function call to initialize app
startPrompts()



