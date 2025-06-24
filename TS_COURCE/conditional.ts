type ConditionalType<T extends boolean> = T extends true ? string : number;

const a: ConditionalType<true> = "string"; // OK
const b: ConditionalType<false> = 123; // OK

const c: ConditionalType<false> = "string";

function getObjectKeys<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

const user = { name: "John", age: 30 };
console.log(getObjectKeys(user)); // ["name", "age"]