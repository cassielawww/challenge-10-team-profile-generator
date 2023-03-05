const Employee = require('./employee');

class Engineer extends Employee{ //Engineer constructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;