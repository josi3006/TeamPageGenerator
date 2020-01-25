const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.role = 'Engineer';
        this.gitHub = gitHub;
    }

    getRole() {
        console.log(this.role);
    }
    getGithub() {
        console.log(this.GitHub);
    }

}




const Engineers = [];

const engineer = new Engineer(id, role, Engineers);

console.log("---Manager---");
engineer.printInfo();
engineer.getRole();
engineer.getGithub();


module.exports = Engineer;