const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }


    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
      }
}




module.exports = Manager;