const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}



const managers = [];


module.exports = Manager;