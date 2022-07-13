const Intern = require('../lib/Intern');

//tests the functionality of getSchool() 
test('gets school', () => {
    const intern = new Intern('Dave', '37', 'dave@yahoo.ca', 'Western University');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

//tests the functionality of getRole(), confirming it overwrites "Employee"
test('gets an intern role', () => {
    const intern = new Intern('Dave', '37', 'dave@yahoo.ca');

    expect(intern.getRole()).toBe(("Intern"));
});