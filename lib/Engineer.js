const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //gets name, id, email from employee functions
        super(name, id, email)
        //gets github here
        this.github = github;
    }
    getGitHub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
        
    }
}
module.exports = Engineer;