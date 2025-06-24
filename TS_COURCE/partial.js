var partialUser = { name: "John" };
// const invalidUser: MyPartial<User> = { name: 123 };
function infiniteLoop() {
    while (true) {
        console.log("This will run forever...");
        break;
    }
    throw new Error("This line will never be reached");
}
function throwError(message) {
    throw new Error(message);
}
function testNever() {
    try {
        // infiniteLoop();
        throwError("Test error");
    }
    catch (e) {
        console.error(e);
    }
    var value = Math.random() > 0.5 ? "hello" : 42;
    if (typeof value === "string") {
        console.log("It's a string:", value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log("It's a number:", value.toFixed(2));
    }
    else {
        var exhaustiveCheck = value;
        console.log("Never happens:", exhaustiveCheck);
    }
}
testNever();
console.log("Partial user:", partialUser);
