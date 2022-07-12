const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = []

startGenerator()

function startGenerator() {
    console.log("Welcome Manager! Ready to build your team? Let's start with some of your information.");
    inquirer
        .prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number? (Required)",
                //makes answer required
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('You need to enter your office number!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "name",
                message: "What is your name? (Required)",
                //makes answer required
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter your name!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee id? (Required)",
                //makes answer required
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You need to enter your employee id!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address? (Required)",
                //makes answer required
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name: "confirmAddMember",
                message: "Would you like to add another member to your team? (Required)",
                //makes answer required
                validate: confirmAddMemberInput => {
                    if (confirmAddMemberInput) {
                        return true;
                    } else {
                        console.log('Select YES to add another team member or select NO to finalize your team!');
                        return false;
                    }
                }
            }
        ])
        .then((answers) => {
            manager = new Manager(answers);
            team.push(manager);
            if (answers.confirmAddMember == false) {
                return this.generateHTML(answers);
            } else {
                promptTeamMembers()
            }
        })

}

function promptTeamMembers() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select the employee type of this team member.",
                name: "employeeType",
                choices: ["Intern", "Engineer"]
            }
        ])
        .then(console.log(team))
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