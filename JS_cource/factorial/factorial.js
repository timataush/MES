'use strict';

function calculateFactorial(num) {
    if (num < 0) throw new Error("Факториал отрицательного числа не определен");
    if (num === 0 || num === 1) return 1;
    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

// console.log(calculateFactorial(5))