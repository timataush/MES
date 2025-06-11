function repeatOperation(operation, interval, times) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;
        if (count === times) {
            clearInterval(intervalId);
        }
    }, interval);
}

repeatOperation(()=> console.log('Выполняю операцию'),
    1000,
    5
);