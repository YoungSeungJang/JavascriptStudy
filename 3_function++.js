
function add(a, b) {
    return a + b;
}

function print(name, age) {
    console.log(`${name} ${age}`);
}

const sum = add(1233, 2142);
console.log(sum);

const doSomething = add;

const result = doSomething(2, 3);
console.log(result);

const result2 = add(2, 3);
console.log(result);


function divide(num1, num2){
    return num1 / num2;
}
function surprise(operator){
    const result = operator(2, 3);      //  add(2, 3)
    console.log(result);
}


surprise(divide);