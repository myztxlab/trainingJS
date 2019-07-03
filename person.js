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

//export default Person;
//sementara export belum bisa digunnakan karena gak ada babel

module.exports = Person;