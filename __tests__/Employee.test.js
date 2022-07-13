const Employee = require('../lib/Employee');

//tests the functionality of getName() 
test('gets an employee name', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca');

    expect(employee.getName()).toBe('Dave');
});

//tests the functionality of getId() 
test('gets an employee id', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca');

    expect(employee.getId()).toBe('37');
});

//tests the functionality of getEmail() 
test('gets an employee email', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca');

    expect(employee.getEmail()).toBe('dave@yahoo.ca');
});

//tests the functionality of getRole(), not totally necessary as it will be overwritten in every possible situation
test('gets an employee role', () => {
    const employee = new Employee('Dave', '37', 'dave@yahoo.ca');

    expect(employee.getRole()).toBe(("Employee"));
});
