const Manager = require("../lib/Manager")

test('gets office number', () => {
    const manager = new Manager('Dave', '37', 'dave@yahoo.ca', '24');

    expect(manager.getOfficeNumber()).toBe("24");
});

test('gets a manager role', () => {
    const manager = new Manager('Dave', '37', 'dave@yahoo.ca');

    expect(manager.getRole()).toBe(("Manager"));
});
