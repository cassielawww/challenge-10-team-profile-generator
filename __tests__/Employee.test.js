const Employee = require('../lib/Employee');

test('testing the Employee object', () => {
    const employee = new Employee('Cassie');
});

test('testing the employee id with Employee constructor', () => {
    const id = 999;
    const t = new Employee('Cassie', id);
    expect(t.id).toBe(id);
});

test('set email with constructor', () => {
    const email = 'cassie@testing.ca';
    const t = new Employee('Cassie', 999, email);
    expect(t.email).toBe(email);
});

test('testing getRole method', () => {
    const role = 'Employee';
    const t = new Employee('Cassie', 999, 'cassie@testing.ca', role);
    expect(t.getRole()).toBe(role);
});