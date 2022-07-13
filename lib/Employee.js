class Employee {
    //name, id, email will be extended to the child classes, keep data in this order
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
       return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        //will be overwritten by the getRole() functions in the specific roles
        return "Employee";
    }
}
module.exports = Employee;
    