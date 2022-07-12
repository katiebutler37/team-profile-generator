// const { default: test } = require('node:test');
// const { string } = require('yargs');
const Engineer = require('../lib/Engineer');

test('gets github username', () => {
    const engineer = new Engineer('Dave', '37', 'dave@yahoo.ca', 'engineer');

    expect(player.getGitHub()).toEqual(expect.any(String));
});
