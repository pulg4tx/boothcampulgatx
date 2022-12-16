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

var poli = (polinomio) => {
    //cont para contar las posiciones que van pasando
    //expo para almacenar el numero del exponente
    //coe para almacenar el numero del coeficiente
    //x para comprobar si hay una X o x
    var cont = 0, expo = 0, coe = 0, x = 0;
    while (polinomio[cont] != null) {
        if (polinomio[cont] == 'X' || polinomio[cont] == 'x') //si hay una X o x
        {
            if (polinomio[cont - 1] == '-' || polinomio[cont - 1] == '+') //si hay un signo despues de la x (coeficiente 1)
            {
                coe = 1;
            }
            if (coe == 0) //si coe=0 entonces coe=1
            {
                coe = 1;
            }
            x = 1; //x=1 para que sea verdadera la expresion
        }
        else if (polinomio[cont] == '+') //si hay un signo +
        {
            if (x == 1 && expo == 0) //si hubo una x y el exponente es 0
            {
                expo = 1; //el exponente es 1
                process.stdout.write(`${coe}\t\t   ${expo}\n`); //imprime coeficiente y exponente
                coe = 0; expo = 0; x = 0; //reinicia los enteros
            }
            else if (coe == 0); //si el coeficiente es 0 no hace nada
            else
                process.stdout.write(`${coe}\t\t   ${expo}\n`); //imprime coeficiente y exponente
            coe = 0; expo = 0; x = 0; //reinicia los enteros
        }
        else if (polinomio[cont] == '-')//si hay un signo +
        {
            if (x == 1 && expo == 0) //si hubo una x y el exponente es 0
            {
                expo = 1; //el exponente es 1
                process.stdout.write(`${coe}\t\t   ${expo}\n-`); //imprime coeficiente y exponente
                coe = 0; expo = 0; x = 0;//reinicia los enteros
            }
            else if (polinomio[cont - 1] == '(') //si antes del - hubo un (
            {
                expo = 0; //exponente = 0
            }
            else if (coe == 0) //si el coeficiente es 0
            {
                process.stdout.write(`-`); //imprime un -
            }
            else //de lo contrario
            {
                process.stdout.write(`${coe}\t\t   ${expo}\n-`); //imprime coeficiente y exponente
                coe = 0; expo = 0; x = 0; //reinicia los contadores
            }
        }
        else if (polinomio[cont] == ')') //si hay un )
        {
            process.stdout.write(`${coe}\t\t   -${expo}\n`); //imprime coeficiente y exponente (negativo)
            coe = 0; expo = 0; x = 0;//reinicia los enteros
        }
        else //de lo contrario
        {
            if (x == 1) //si hubo una x
            {
                expo = (expo * 10) + (parseInt(polinomio[cont])); //guardar el numero del exponente 
            }
            else {
                coe = (coe * 10) + (parseInt(polinomio[cont])); //guardar el numero del coeficiente
            }
        }
        if (polinomio[cont + 1] == null) //si la siguiente posicion es un cierre de cadena
        {
            if (expo == 0 && x == 1) //si expo = 0 y hubo una x 
            {
                expo = 1; //expo es igual a 1
            }
            if (polinomio[cont] != ')') //si la ultima posicion (antes del cierre) es diferente de un )
                process.stdout.write(`${coe}\t\t   ${expo}`); //imprime coeficiente y exponente
        }
        cont = cont + 1; //suma al contador para la siguiente posicion
    }
}

var polinomio; //char para almacenar el polinomio
polinomio = scanf("%s", "ingrese un polinomio: "); //ingreso del polinomio
process.stdout.write("Coeficiente     Exponente\n"); //diseño
var aux = [];
for(var i = 0; i < polinomio.length; i++ )
{
    aux[i] = polinomio[i];
}
aux[i]= null;

poli(aux); //descomponer polinomio
console.log();
