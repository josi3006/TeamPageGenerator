const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, role, gitHub) {
        super(id, 'Alex', 'Engineer');
        this.role = role;
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