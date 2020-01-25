const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, role, officeNumber) {
        super(id, 'John G Sims', 'Boss');
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log(this.role);
    }

}




const managers = [];

const manager = new Manager(id, role, managers);

console.log("---Manager---");
manager.printInfo();
manager.getRole();
