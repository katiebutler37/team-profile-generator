const Manager = require("../lib/Manager")

test('gets office number', () => {
    const manager = new Manager('Dave', '37', 'dave@yahoo.ca');

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('gets a manager role', () => {
    const manager = new Manager('Dave', '37', 'dave@yahoo.ca');

    expect(manager.getRole()).toBe(("manager"));
});
