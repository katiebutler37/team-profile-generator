const Engineer = require('../lib/Engineer');

//tests the functionality of getGitHub() 
test('gets github username', () => {
    const engineer = new Engineer('Dave', '37', 'dave@yahoo.ca', 'dave@github.com');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

//tests the functionality of getRole(), confirming it overwrites "Employee" 
test('gets an engineer role', () => {
    const engineer = new Engineer('Dave', '37', 'dave@yahoo.ca');

    expect(engineer.getRole()).toBe(("Engineer"));
});
