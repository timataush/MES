class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`;
    }
}

const person1 = new Person('Иван', 30, 'Россия');
const person2 = new Person('Мария', 25, 'Беларусь');

console.log(person1.displayInfo()); // Имя: Иван, Возраст: 30, Страна: Россия
console.log(person2.displayInfo()); // Имя: Мария, Возраст: 25, Страна: Беларусь

console.log(person1.name);    // "Иван"
console.log(person2.age);     // 25