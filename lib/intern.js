const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.role = 'Intern';
        this.school = school;
    }

    getRole() {
        console.log(this.role);
    }
    getSchool() {
        console.log(this.school);
    }

}




const interns = [];

const intern = new Intern(id, role, interns);

console.log("---Manager---");
intern.printInfo();
intern.getRole();
intern.getSchool();


module.exports = Intern;