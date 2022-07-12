const Engineer = require('../lib/Engineer');

test('gets an employee name', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca', 'manager');

    expect(employee.getName()).toBe('Dave');
});