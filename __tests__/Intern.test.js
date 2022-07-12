const Intern = require('../lib/Intern');

test('gets school', () => {
    const intern = new Intern('Dave', '37', 'dave@yahoo.ca');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets an intern role', () => {
    const intern = new Intern('Dave', '37', 'dave@yahoo.ca');

    expect(intern.getRole()).toBe(("intern"));
});