function compareObjects(obj1, obj2) {

    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);



    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {

        // ссылка на инфу hasOwnProperty: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;

}

console.log(compareObjects({a: 1}, {a: 1})); // true
console.log(compareObjects({a: 1}, {a: 2})); // false
console.log(compareObjects({a: 1}, {a: 1, b: 2})); // false
console.log(compareObjects({a: 1, b: 2}, {b: 2, a: 1})); // true
console.log(compareObjects('text', {a: 1})); // false