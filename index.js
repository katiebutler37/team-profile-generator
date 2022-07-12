const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = []



function startGenerator() {
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
            let manager = new Manager(answers.managerOfficeNumber, answers.managerName, answers. managerId, answers.managerEmail);
            team.push(manager);
            promptEmployeeType()
        })
}

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
            

        ])
    }
}



//pseudocode for later

// // you're promptTeamMembers()
// what action do you wanna take? make a new intern, employyee, enginner
// prmpt them with list
// .then choice = 

// switch case 
// //




// fs.writefile('src/index.html', generateHTML(team))
// `<DOCTYPE!


// <HEAD>

// BODY
// <HEADER>
// <SECTIONS>
// ${getManagers(team)}
// ${getEngineers(team)}
// `
// ${}

// getManagers(){
//     team.forEach(member => if member.getRole() == "Manager")
//     return ``
// }

startGenerator()