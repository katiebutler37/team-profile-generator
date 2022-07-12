const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super(name, id, email, role)
        this.officerNumber = officeNumber;
    }
    getRole () {
        return "Manager"
        
    }
}
module.exports = Manager;