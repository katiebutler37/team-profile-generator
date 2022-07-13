function getManager (team) {
    return `
    <article class="card">
             <div class="employee-heading">
                <h2 class="name">
                ${team[0].getName()}
                </h2>
                <h3 class="role">
                    <i class="fa-solid fa-mug-hot"></i> Manager
                </h3>
             </div>
             <div class="employee-content-container">
                <div class="employee-content id">
                   ID: ${team[0].getId()}
                </div>
                <div class="employee-content email">
                   Email: ${team[0].getEmail()}
                </div>
                <div class="employee-content office-number">
                   Office number: ${team[0].getOfficeNumber()}
                </div>
             </div>
          </article>
    `;
};

// function checkIntern (team) {
//     team.forEach(member => {
//         if (member.getRole() == "Intern") {
//             return internName, internId, internEmail, internSchool;
//         }
//     })
// }
function getInterns (team) {
    // const interns = team.filter(checkIntern)
    team.forEach(intern => {
        if (intern.getRole() == "Intern") {
            return `
            <article class="card">
            <div class="employee-heading">
               <h2 class="name">
               ${intern.getName()}
               </h2>
               <h3 class="role">
                <i class="fa-solid fa-user-graduate"></i> Intern
               </h3>
            </div>
            <div class="employee-content-container">
               <div class="employee-content id">
                  ID: ${intern.getId()}
               </div>
               <div class="employee-content email">
                  Email: ${intern.getEmail()}
               </div>
               <div class="employee-content school">
                  Office number: ${intern.getSchool()}
               </div>
            </div>
         </article>
            `
        }
    })
}

function getEngineers (team) {
    team.forEach(engineer => {
        if (engineer.getRole() == "Engineer") {
            return `
            <article class="card">
            <div class="employee-heading">
               <h2 class="name">
               ${engineer.getName()}
               </h2>
               <h3 class="role">
                <i class="fa-solid fa-glasses"></i> Engineer
               </h3>
            </div>
            <div class="employee-content-container">
               <div class="employee-content id">
                  ID: ${engineer.getId()}
               </div>
               <div class="employee-content email">
                  Email: ${engineer.getEmail()}
               </div>
               <div class="employee-content github">
                  Office number: ${engineer.getGitHub()}
               </div>
            </div>
         </article>
            `
        }
    })
}
// getManagers(){
//     team.forEach(member => if member.getRole() == "Manager")
//     return ``
// }

module.exports = generateHTML = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <script src="https://kit.fontawesome.com/003f026d41.js" crossorigin="anonymous"></script>
       <link rel="stylesheet" href="style.css">
       <title>My Team</title>
    </head>
    
    <body>
       <header>
          <h1>My Team</h1>
       </header>
       <main>
          ${getManager(team)}
          ${getEngineers(team)}
          ${getInterns(team)}
       </main>
    </body>
    
    </html>
    `;
  };
  
//   ${getManager(team)}
//   ${getInterns(team)}
//   ${getEngineers(team)}