function testVariableScopes() {
    // Блок кода
    {
        var varVariable = 'var видна вне блока';
        let letVariable = 'let не видна вне блока';
        const constVariable = 'const не видна вне блока';

        console.log('Внутри блока:', varVariable, letVariable, constVariable);
    }

    console.log('Снаружи блока:', varVariable); // Работает
    console.log(letVariable); // Ошибка ReferenceError
    console.log(constVariable); // Ошибка ReferenceError
}

testVariableScopes();