const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('testing the intern object', () => {
    const intern = new Intern('Intern');
});

test('testing the getSchool method', () => {
    const test = 'Testing University';
    const t = new Intern('Intern', 900, 'intern@testing.ca', test);
    expect(t.getSchool()).toBe(test);
});

// Test if the getRole() value is Intern
test('testing the getRole method', () => {
    const test = 'Intern';
    const t = new Intern('Intern', 900, 'intern@testing.ca', test);
    expect(t.getRole()).toBe(test);
});