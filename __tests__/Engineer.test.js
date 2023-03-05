const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('testing the Engineer object', () => {
    const engineer = new Engineer('Cassie');
});

test('testing the getGitHub method', () => {
    const test = 'engineer-test';
    const t = new Engineer('Cassie', 999, 'engineer@testing.ca', test);
    expect(t.getGitHub()).toBe(test);
});

test('testing the getRole object', () => {
    const test = 'Engineer';
    const t = new Engineer('Cassie', 999, 'engineer@testing.ca', 'engineer-test');
    expect(t.getRole()).toBe(test);
});