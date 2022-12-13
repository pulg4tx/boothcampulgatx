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
/*1.Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando
progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin
sobrepasar el número 10,000.*/
/*
function fibonacci1(a, b){
	process.stdout.write(`${a}`);
	if (b<10000){
		process.stdout.write(", ");;
		fibonacci1(b,(a+b));
	}
}

(fibonacci1(0,1));

var fib = (a,b,str) => {
	var an = new String();
	an = a;
	str += an + " ";
	if (b<10000){
		fib(b,(a+b), str);
	}else{
		process.stdout.write(str);
	}
}

fib(0,1,"")
*/
/*Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos de la serie de Fibonacci entre 0 y 100.*/

/*
var sumfib = (a,b, str, c) => {
	var an = new String();
	an = a;
	c += a;
	str += an + " ";
	if (b<100){
		sumfib(b,(a+b), str,c);
	}else{
		process.stdout.write(`${str}y su suma es: ${c}`);
	}
}

sumfib(0,1,"",0)

*/

/*
Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo imprima al revés.
*/
/*
reves = (a) => {
	if(a < 10){
		process.stdout.write(`${a}`);
	} else {
		process.stdout.write(`${a%10}`);
		reves((a-(a%10))/10);
	}
}

process.stdout.write(`Este programa lee desde el teclado un numero entero y lo imprime al reves: \n`);
var num = scanf("%i","Entre el numero: ");

reves(num);
console.log("");
*/
/*
leer = (num, max, min, negativos, mayores, prom, contador) => {
	if (contador===1) {
		num = scanf("%i", "Ingrese un numero entero diferente de cero: ");
		
		if (num===0){
			process.stdout.write("por favor ingrese un numero difente de cero\n");
			leer (0, max, min, negativos, mayores, prom+num, contador);
		}
		else {
			max=num;
			min=num;
			
			if (num<0) {
				negativos=negativos+1;
			}
			if (num>150) {
				mayores=mayores+1;
			}
			if (num>0){
				prom=prom+num;
			}
			leer (0, max, min, negativos, mayores, prom, contador+1);
		}
	} else {
		if (contador<=75) 
		{
			num = scanf ("%i", "Ingrese un numero entero (diferente de cero): ");
			
			if (num===0){
				process.stdout.wwrite("porfavor ingrese un numero difente de cero\n");
				leer (0, max, min, negativos, mayores, prom, contador);
			} else {
			if (num>max) {
				max=num;
			} if (num<min) {
				min=num;
			} if (num<0) {
				negativos=negativos+1;
			} if (num>150) {
				mayores=mayores+1;
			} if (num>0){
				prom=prom+num;
			}
			leer (0, max, min, negativos, mayores, prom, contador+1);
			}
		} else {
		process.stdout.write(`\nNumero mayor: ${max}\nNumero minimo: ${min}\nNumero negativos: ${negativos}\nNumeros mayores a 150: ${mayores}\nPromedio de numeros: ${prom/75}`);
		}
	}
}
leer (0, 0, 0, 0, 0, 0, 1);
*/
/*
var tablas = (contador,final) => {
	if (contador<=final) {
		ciclo (1, 10, contador);
		process.stdout.write("\n");
		tablas (contador+1, final);
	}
}

var ciclo = (contador2, final2, cont)=> {
	if (contador2<=final2) {
		process.stdout.write(`${cont} x ${contador2} = ${(cont*contador2)}\n`);
		ciclo ((contador2+1), final2, cont);
	}
}

tablas(1,10);

*/
/*
function fac(num){
	if (num===0){
		num=1
		return num;
	}
	else if (num>0){
		return (num*(fac(num-1)));
	}
}

var num = scanf("%i", "Ingresa un dato");
process.stdout.write(`el factorial de ${num} es: ${fac(num)}`);
*/
/*
var factorial = (num) => {
	if (0==num) {
		return 1;
	}
	else {
		return num*(factorial (num-1) );
	}
}

var suma = (num2,acumulador) => {
	  if (num2>=0) {
			process.stdout.write(`+ ${(factorial (num2))} `);
			suma (num2-1, acumulador+(factorial (num2)));
	 }
	 else  {
		  process.stdout.write(` = ${acumulador} `);
	 }
 }
 
var validar = (valor) => {
	  if (valor<0) {
			process.stdout.write(`El numero debe ser positivo`);
			valor = scanf ("%i","Ingresa un valor positivo");
			validar (valor);
	 }
	 else {
		  process.stdout.write(`\nLa suma de los factores desde 0 hasta ${valor} es : `);
		  suma (valor, 0);
	 }

 }

 var N = scanf("%i", "INGRESA UN VALOR: ");
 validar(N);
 */
/*
 var ciclo=(numero1,numero2) => {
	if (numero1<10) {
		if (numero1%2==1) {
			process.stdout.write(`${numero1} ${numero2}\n`);
			ciclo ( numero1+1, numero2+1);
		} else {
			process.stdout.write(`${numero1} ${numero2}\n`);
			ciclo ( numero1+1, numero2);
		}	
	}
}
ciclo(0, 1);
*/
/*
var ciclo = (numero1, numero2 ,numero3) => {
	if (numero1<10) 
	{
		if (numero1%3==0) 
		{
			process.stdout.write(`${numero1} ${numero2} ${numero3}\n`);
			ciclo ( numero1+1, numero2+1, 1);
		}
		else 
		{
			process.stdout.write(`${numero1} ${numero2} ${numero3}\n`);
			ciclo ( numero1+1, numero2, numero3+1);
		}
	}
}
ciclo (1, 1, 1);
*/
/*
var espaciosp = (contadoresp, contadoresp2, contadorespmedio, contadorespmedio2, contadorPoS, contadorfinal)=>{
	if (contadoresp > 0) {
		process.stdout.write(" ");
		espaciosp(contadoresp - 1, contadoresp2, contadorespmedio, contadorespmedio2, contadorPoS, contadorfinal);
	}
	else {
		imprimaA(contadoresp2, contadorespmedio, contadorespmedio2, contadorPoS, contadorfinal);
	}
}

var imprimaA= (contadoresp2, contadorespmedio, contadorespmedio2, contadorPoS, contadorfinal)=>{
	process.stdout.write("A");
	if (contadorPoS == 0) {
		espaciosmedios(contadoresp2, contadorespmedio, contadorespmedio2, 1, contadorfinal);
	}
	else {
		salto(contadoresp2, contadorespmedio2, 0, contadoresp2 + contadorespmedio2 + 2, contadorfinal);
	}
}

var espaciosmedios = (contadoresp2, contadorespmedio, contadorespmedio2, contadorPoS, contadorfinal)=>{
	if (contadorespmedio > 0) {
		process.stdout.write(" ");
		espaciosmedios(contadoresp2, contadorespmedio - 1, contadorespmedio2, contadorPoS, contadorfinal);
	}
	else {
		imprimaA(contadoresp2, contadorespmedio, contadorespmedio2, contadorPoS, contadorfinal);
	}
}

var salto = (contadoresp2, contadorespmedio2, contadorPoS, total, contadorfinal)=>{
	if (contadorfinal > 0) {
		if (total > 0) {
			process.stdout.write("\n");
			espaciosp(contadoresp2 + 1, contadoresp2 + 1, contadorespmedio2 - 2, contadorespmedio2 - 2, contadorPoS, contadorfinal - 1);
		}
	}
}

espaciosp(0,0,6,6,0,3);
console.log("");
*/
/*
var ciclo = (contador) => {
	if (contador<=25) 
		{
		espacios (1, 80-contador);
	    letras (1, contador);
	    process.stdout.write("\n");
	    ciclo (contador+1);
		}
}

var espacios = (contador2, esp2) => {
	if (contador2<=esp2) {
		process.stdout.write(" ");
		espacios (contador2+1, esp2);
	}
}

var letras = (contador3, limite) => {
	if (contador3<=limite) {
		process.stdout.write("A");
		letras (contador3+1, limite);
	}
}

ciclo(1);
*/
 /*
var ciclo = (contador, columnas, filas, caracter) => {
	if (contador<=filas) {
		ciclo2 (1, contador-1, 32);
		ciclo2 (-1, columnas-(contador*2), 82-caracter);
		process.stdout.write("\n");
		ciclo (contador+1, columnas, filas, caracter+2);
	}
}

var ciclo2 = (contador2, final, caracter) => {
	if (contador2<=final) {
		if(caracter === 80){
			process.stdout.write("P");
		} else if (caracter === 78) {
			process.stdout.write("N");
		} else if (caracter === 76) {
			process.stdout.write("L");
		} else if (caracter === 74) {
			process.stdout.write("J");
		} else if (caracter === 72) {
			process.stdout.write("H");
		} else if (caracter === 70) {
			process.stdout.write("F");
		} else if (caracter === 68){
			process.stdout.write("D");
		} else if (caracter === 32) {
			process.stdout.write(" ");
		}
		ciclo2 (contador2+1, final, caracter);
	}
}

var funcion = (columnas, filas) => {
	ciclo (1, columnas, filas, 2);
}

funcion (13, 7);
*/

