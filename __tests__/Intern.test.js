const Intern = require('../lib/Intern');

test('gets school', () => {
    const intern = new Intern('Dave', '37', 'dave@yahoo.ca', 'intern');

    expect(player.getSchool()).toEqual(expect.any(String));
});