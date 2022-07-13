const Manager = require("../lib/Manager")

//tests the functionality of getOfficeNumber() 
test('gets office number', () => {
    const manager = new Manager('Dave', '37', 'dave@yahoo.ca', '24');

    expect(manager.getOfficeNumber()).toBe("24");
});

//tests the functionality of getRole(), confirming it overwrites "Employee"
test('gets a manager role', () => {
    const manager = new Manager('Dave', '37', 'dave@yahoo.ca');

    expect(manager.getRole()).toBe(("Manager"));
});
