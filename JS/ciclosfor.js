const readline = require('readline-sync');

function scanf(type, question) {
    var ret = readline.question(`${question}`);

    switch (type) {
        case "%i":
            ret = parseInt(ret);
            break;
        case "%f":
            ret = parseFloat(ret);
            break;
        case "%s":
            ret = ret;
            break
        case "%c":
            ret = ret[0];
    }

    return ret;
}
/*
//fibo
var fibo = () => {
    var pos0 = 0, pos1 = 1, actual = 0;

    process.stdout.write(`${pos0} ${pos1} `);
    for (var i = 0; actual < 10000; i = i + 1) {
        actual = pos0 + pos1;
        if (actual < 10000)
            process.stdout.write(`${actual} `);
        pos0 = pos1;
        pos1 = actual;
    }
}

fibo();


//sumfibo
var sumfibo = () => {
    var pos0 = 0, pos1 = 1, actual = 0, sum = 1;

    process.stdout.write(`${pos0} ${pos1} `);
    for (var i = 0; actual < 100; i = i + 1)
    {
        actual = pos0 + pos1;
        if (actual < 100)
        {
            process.stdout.write(`${actual} `);
            sum = sum + actual;
        }
        pos0 = pos1;
        pos1 = actual;
    }

    process.stdout.write(`La suma es: ${sum}\n`);
}

sumfibo();


//al reves

var alreves = (num) => {
    var inv = 0;
    for (var i = 0; num > 0; i= i+1)
    {
        inv = inv * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    inv = parseInt(inv);
    return inv;
}
var num = scanf("%i","Ingresa un numero: ");
process.stdout.write(`El numero invertido es: ${alreves(num)}\n`);


//75 numeros
var numeros = () => {
    var num, i, mayor=-10000000, menor=1000000, a = 0, b = 0;
    var n = 0, suma = 0;
    for (i = 0; i < 75; i++)
    {
        num = scanf("%i", "Ingresa un numero: ");

        if (num > mayor)
            mayor = num;

        if (num < menor)
            menor = num;

        if (num > 150)
            a = a + 1;

        if (num < 0)
            b = b + 1;

        if (num > 0)
        {
            n = n + 1;
            suma = suma + num;
        }
    }
    var promedio = (suma / n);
    process.stdout.write(`\nnumeros mayores a 150:  ${a} \n`);
    process.stdout.write(`El mayor es ${mayor}\n`);
    process.stdout.write(`El menor es ${menor}\n`);
    process.stdout.write(`cantidad de numeros negativos: ${b}\n`);
    process.stdout.write(`el promedio de los numeros positivos es: ${promedio}`);
}

numeros();


//tablas

var multiplicacion = () => {
    for (let i = 1; i <= 10; i = i + 1)
    {
        for (let j = 1; j <= 10; j = j + 1)
        {
            process.stdout.write(`${i} x ${j} = ${i*j}\n`);
        }
        process.stdout.write("\n");
    }
}
multiplicacion();

//Factorial
var factorial = (num) => {
    let mul = 1;
    process.stdout.write(`El factorial de ${num} es:`);

    if (num > 0) {
        for (let i = num; i > 0; i = i - 1) {
            mul = i * mul;
        }
    } else 
        mul=1;
    process.stdout.write(` ${mul}\n`);

    return;
}

var num = scanf("%i", "Ingresa un numero: ");
if (num === 0)
    factorial(0);
else if (num > 0)
    factorial(num);


//Suma factorial

var ciclo = () => {
    var num = scanf("%i", "Ingresa un numero:   ");
    var sum = 0;

    if (num > 0)
        for (var i = num; i >= 0; i = i - 1) {
            if (i != 0) {
                process.stdout.write(`${i}! + `);
                sum = sum + factorial(i);
            } else {
                process.stdout.write(`${i}! `);
                sum = sum + factorial(i);
            }
        }
    process.stdout.write(`= ${sum}\n`);
}

var factorial = (num) => {
    var mul = 1;
    if (num == 0) {
        return mul;
    } else {
        for (var i = num; i > 0; i = i - 1) {
            mul = i * mul;
        }
    }
    return mul;
}

ciclo();
*/

