class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
    }
  
    // printInfo() {
    //   console.log(`This person's name is ${this.name}`);
    //   console.log(`This person's ID is ${this.id}`);
    //   console.log(`This person's email is ${this.email}`);
    //   console.log(`This person's title is ${this.role}`);

    // }

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