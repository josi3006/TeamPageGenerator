class Employee {
    constructor(id, name, email, title) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.title = title;
    }
  
    printInfo() {
      console.log(`This person's name is ${this.name}`);
      console.log(`This person's ID is ${this.id}`);
      console.log(`This person's email is ${this.email}`);
      console.log(`This person's title is ${this.title}`);

    }

    getName() {
        console.log(this.name);
    }
    getId() {
        console.log(this.id);
    }
    getEmail() {
        console.log(this.email);
    }
    getRole() {
        console.log(this.role);
    }

  }
  module.exports = Employee;