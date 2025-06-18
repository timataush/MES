function integer_check(num) {
    if (!Number.isInteger(num)){
        throw new Error('Переданное значение не является целым числом');
    }
    return true;
}

console.log(integer_check(5.2)); //Переданное значение не является целым числом
console.log(integer_check(5)); //5