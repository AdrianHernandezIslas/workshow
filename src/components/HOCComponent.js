const fnCallback = (numberA,numberB) => {
    console.log(numberA,numberB);
};


const execOperation = (funcion) => {
    return (numberA,numberB) => {
        funcion(numberA,numberB);
        return numberA + numberB;
    };
};

const sum = execOperation(fnCallback);
sum(2,4)