var a = "string"; // OK
var b = 123; // OK
var c = "string";
function getObjectKeys(obj) {
    return Object.keys(obj);
}
var user = { name: "John", age: 30 };
console.log(getObjectKeys(user)); // ["name", "age"]
