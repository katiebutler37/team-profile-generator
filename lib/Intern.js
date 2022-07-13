const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        //gets name, id, email from employee functions
        super(name, id, email)
        //gets school here
        this.school = school;
    }
    getSchool () {
        return this.school;
    }
    getRole () {
        return "Intern";
    }
}
module.exports = Intern;