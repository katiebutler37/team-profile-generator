function getManager (team) {
    // getManager grabs data from the first object in the teams array since this application always starts with manager and includes one manager
    //returns HTML to generate a card with dynamically inputted name, id, email and officenumber
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
                   Email: <a href = "mailto:${team[0].getEmail()}">${team[0].getEmail()}</a>
                </div>
                <div class="employee-content office-number">
                   Office number: ${team[0].getOfficeNumber()}
                </div>
             </div>
          </article>
    `;
};

function getInterns (team) {
    //set intern HTML sections to an emppty string
    let internHTML = "";
    //for each employee in which getRole() returns Intern, this HTML is added (+=) to the HTML to allow multiple interns
    team.forEach(intern => {
        if (intern.getRole() === "Intern") {
            internHTML += `
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
                  Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a>
               </div>
               <div class="employee-content school">
                  School: ${intern.getSchool()}
               </div>
            </div>
         </article>
            `
        }
        else {
            //otherwise nothing is added
            internHTML += ""
        }
    })
    return internHTML
}

function getEngineers (team) {
    //sets engineer HTML to an empty string
    let engineerHTML = "";
    //for each employee in which getRole() returns Engineer, this HTML is added (+=) to the HTML to allow multiple engineers
    team.forEach(engineer => {
        if (engineer.getRole() === "Engineer") {
            engineerHTML += `
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
                  Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
               </div>
               <div class="employee-content github">
                  GitHub: <a href = "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a>
               </div>
            </div>
         </article>
            `
        } else {
            //otherwise it remains an empty string
            engineerHTML += ""
        }
    })
    return engineerHTML
}

//takes in team data, formatted in the above functions to generate the final HTML template for the full page
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
  
