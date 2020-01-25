const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.role = 'Intern';
        this.school = school;
    }
}



const interns = [];


module.exports = Intern;