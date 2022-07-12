// const { default: test } = require('node:test');
// const { string } = require('yargs');
const Engineer = require('../lib/Engineer');

test('gets github username', () => {
    const engineer = new Engineer('Dave', '37', 'dave@yahoo.ca', 'dave@github.com');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('gets an engineer role', () => {
    const engineer = new Engineer('Dave', '37', 'dave@yahoo.ca');

    expect(engineer.getRole()).toBe(("Engineer"));
});
