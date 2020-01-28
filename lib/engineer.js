const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.role = 'Engineer';
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
        return this.github;
    }

}




module.exports = Engineer;