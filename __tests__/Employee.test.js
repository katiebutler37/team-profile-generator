const Employee = require('../lib/Employee');

test('gets an employee name', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca', 'manager');

    expect(employee.getName()).toBe('Dave');
});

test('gets an employee id', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca', 'manager');

    expect(employee.getId()).toBe('37');
});

test('gets an employee email', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca', 'manager');

    expect(employee.getEmail()).toBe('dave@yahoo.ca');
});

test('gets an employee role', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca', 'manager');

    expect(employee.getRole()).toBe('manager');
});
