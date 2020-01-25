const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.role = 'Engineer';
        this.github = github;
    }
}



const engineers = [];


module.exports = Engineer;