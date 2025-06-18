function executeSequentially(promises) {
    return promises.reduce((chain, currentPromise) => {
        return chain.then(() => currentPromise());
    }, Promise.resolve());
}

const operationsWithError = [
    () => Promise.resolve('Успешная операция'),
    () => Promise.reject('Ошибка в операции 2'),
    () => Promise.resolve('Эта операция не выполнится')
];

executeSequentially(operationsWithError)
    .then(() => console.log('Это не выведется'))
    .catch(error => console.log('Поймана ошибка:', error));