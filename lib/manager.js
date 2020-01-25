const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
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


module.exports = Manager;