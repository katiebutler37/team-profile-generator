const inquirer = require("inquirer");
const { listenerCount } = require("process");
const internal = require("stream");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = []
function input() {
    console.log("Welcome. Manager input");
    inquirer
        .prompt([
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
                type: "input",
                name: "contact",
                message: "If there is another way you would like to be contacted regarding questions about your repository, please enter those instructions here."
            }
        ]
        )
        .then((answers) => {
            manager = new Manager()
            promptTeamMembers()
        })
}


//pseudocode for later

// // you're promptTeamMembers()
// what action do you wanna take? make a new internal, employyee, enginner
// prmpt them with listenerCount
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