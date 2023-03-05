const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('testing the Manager object', () => {
    const manager = new Manager('Manager');
});

test('testing the getOffice method', () => {
    const test = 777;
    const t = new Manager('Manager', 700, 'manager@testing.ca', test);
    expect(t.getOffice()).toBe(test);
});

test('testing the getRole method', () => {
    const test = 'Manager';
    const t = new Manager('Manager', 700, 'manager@testing.ca', 777);
    expect(t.getRole()).toBe(test);
});