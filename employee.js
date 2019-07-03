//import Person from "person.js";
//sementara import belum bisa digunnakan karena gak ada babel

let Person = require("./person");
class Employee extends Person {
    constructor(name, title) {
      super(name);
      this._title = title;
    }
}

let scott = new Employee("Scott Moss","Teacher");
console.log(scott.getName());
console.log(scott.getAge());
console.log(scott._title);
