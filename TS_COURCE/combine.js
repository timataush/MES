function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
console.log(combine(1, 2)); // 3
console.log(combine("Hello", " World")); // "Hello World"
