const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

// function getRole() {
//     console.log(this.role);
// }

// getRole();






const managers = [];


// Manager.getRole();


module.exports = Manager;