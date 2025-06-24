class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}

const person = new Person("John");
console.log(person.getName()); // "John"

person.setName("Alice");
console.log(person.getName()); // "Alice"
