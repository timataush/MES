var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Person;
}());
var person = new Person("John");
console.log(person.getName()); // "John"
person.setName("Alice");
console.log(person.getName()); // "Alice"
