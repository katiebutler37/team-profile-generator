const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //gets name, id, email from employee functions
        super(name, id, email)
        //gets officeNumber here
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Manager";
        
    }
}
module.exports = Manager;