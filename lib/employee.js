class Employee {
    constructor(id, name, email, role) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = "Employee";
    }
  
    printInfo() {
      console.log(`This person's name is ${this.name}`);
      console.log(`This person's ID is ${this.id}`);
      console.log(`This person's email is ${this.email}`);
      console.log(`This person's title is ${this.role}`);

    }

    getName() {
        console.log(this.name);
        return this.name;
    }
    getId() {
        console.log(this.id);
        return this.id;
    }
    getEmail() {
        console.log(this.email);
        return this.email;
    }
    getRole() {
        console.log(this.role);
        return this.role;
    }

  }
  module.exports = Employee;