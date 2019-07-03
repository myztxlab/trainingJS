console.log('hallo class');

class Sesi3 {
    constructor()
    {
        this.name = "Jody";
    }

    ini_method()
    {
        return `ini method ${this.name}`;
    }

    static ini_static() {
        return 'ini static';
    }

    static panggil_static() {
        return `panggil dari static ${this.ini_static()}`;
    }

}

let sesi3 = new Sesi3();
console.log(sesi3.ini_method());
console.log(sesi3.name);
console.log(Sesi3.ini_static());

let statik = Sesi3;
console.log(statik.ini_static());
console.log(Sesi3.panggil_static());

class Student extends Sesi3 {
    ini_student ()
    {
        return `murid ${this.ini_method()} nama saya ${this.name}`;
    }
}

let student = new Student();
console.log(student.ini_student());


class Person {
    constructor(name) {
      this._name = name;
      this._age = 20;
    }
    getName() {
      return this._name;
    }
    getAge() {
        return this._age;
      }
    }
  
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

