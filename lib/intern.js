const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, role, school) {
        super(id, 'Bob', 'Intern');
        this.role = role;
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