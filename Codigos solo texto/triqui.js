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

var main = () => {
    var triqui=["1","2","3","4","5","6","7","8","9"]; //crear variable para almacenar el triqui
    dise(triqui,0,'*'); //llamado a la funcion dise para imprimir el triqui por primera vez
    juego(triqui); //llamado para iniciar el juego
}
var clear = () => console.clear()

var juego = (triqui) => {
    //error para verificar si es valida la posicion
    //cont para contar las veces jugadas y saber que jugador tiene el turno
    //tiro para almacenar la posicion ingresada en teclado
    //ver para almacenar un 0 sino ha ganado nadie, un 1 si ya gano alguien y un 2 si fue un empate
    var error=0,cont=1,tiro=0, ver=0;

    //marca para almacenar la marca a poner (X para el primer jugador y O para el segundo jugador)
    //jugador para almacenar el numero del jugador (jugador 1 o jugador 2)
    var marca,jugador='1';
    do
    {
        error=1; //inicia error en 1, solo cambia en caso de que la casilla este jugada o sea una posicion invalida
        if(cont%2==0) //cont % 2 significa que el jugador es el numero 2
            marca='O';
        else 
            marca='X';
        
        process.stdout.write(`Jugador ${jugador}: \n`); 
        tiro = scanf("%i","Entre numero casilla: "); //ingreso de la posicion por teclado
        if(tiro<1 || tiro>9) //verificar si es una posicion valida
        {
            process.stdout.write("\nPosicion invalida\n");
            error=2; //error (posicion invalida)
        }
        else if (triqui[tiro-1]=='X' || triqui[tiro-1]=='O') //verificar si la posicion esta disponible para jugar
        {
            process.stdout.write("\nCasilla ya jugada\n");
            error=2; //error (casiilla ya jugada)
        }
        else //de lo contrario
        {
            triqui[tiro-1]=marca; //poner la marca en la posicion
        }
        if(error==2) //si error=2 entonces la posicion es invalida o la casilla esta jugada (se repite el turno)
        {
            scanf("%i","Presiona enter para continuar...");
        }
        dise(triqui,0,jugador); //imprimir el diseño
        ver=verificar(triqui); //verificar si ya se gano
        if(ver==1) //ver=1 para cuando ya se gano
        {
            cont=10; //superar el cont<=9 para terminar el ciclo
            dise(triqui,ver,jugador); //imprimir el diseño con el ganador
        }
        else if(ver==2) //ver=2 para un empate
        {
            dise(triqui,ver,jugador); //imprimir el diseño con un empate
        }
        else if(ver==0) //ver=0 significa que nadie ha ganado aun
        {
            dise(triqui,ver,jugador); //imprimir el diseño
        }

        if(error==1) //sino hubo ningun error
        {
            cont=cont+1; //suma uno al contador para el proximo turno
            if (jugador=='1') //si el jugador es 1
            {
             jugador='2'; //cambio de jugador
            }
            else //de lo contrario
            {
             jugador='1'; //cambio de jugador
            }
        }
    }while(cont<=9); //fin Do While
}
var dise = (triqui,opc, jugador) => {
    clear(); //limpiar pantalla
    if(opc==0) //nadie ha ganado
    {
        process.stdout.write("JUEGO DEL TRIQUI\n");
        process.stdout.write(`\n ${triqui[0]} | ${triqui[1]} | ${triqui[2]}\n`);
        process.stdout.write(`---+---+---\n`);
        process.stdout.write(`\n ${triqui[3]} | ${triqui[4]} | ${triqui[5]}\n`);
        process.stdout.write(`---+---+---\n`);
        process.stdout.write(`\n ${triqui[6]} | ${triqui[7]} | ${triqui[8]}\n\n`);
    }
    else if(opc==1) //ya gano alguien
    {
        process.stdout.write(`Jugador: ${jugador} Gana!\n\n`);
        process.stdout.write(`\n ${triqui[0]} | ${triqui[1]} | ${triqui[2]}\n`);
        process.stdout.write(`---+---+---\n`);
        process.stdout.write(`\n ${triqui[3]} | ${triqui[4]} | ${triqui[5]}\n`);
        process.stdout.write(`---+---+---\n`);
        process.stdout.write(`\n ${triqui[6]} | ${triqui[7]} | ${triqui[8]}\n\n`);
    }
    else if(opc==2) //empate
    {
        process.stdout.write("Empate!\n");
        process.stdout.write(`\n ${triqui[0]} | ${triqui[1]} | ${triqui[2]}\n`);
        process.stdout.write(`---+---+---\n`);
        process.stdout.write(`\n ${triqui[3]} | ${triqui[4]} | ${triqui[5]}\n`);
        process.stdout.write(`---+---+---\n`);
        process.stdout.write(`\n ${triqui[6]} | ${triqui[7]} | ${triqui[8]}\n\n`);
    }
}
var verificar = (triqui) => {
    var ret=0; //ret para almacenar el valor a retornar (0 si nadie ha ganado, 1 si ya gano alguien y 2 si fue un empate)
            if(triqui[0]=='X'||triqui[0]=='O')
            {

              if(triqui[1]==triqui[0]&&triqui[2]==triqui[0]) //horizontal superior
                ret=1;
              if(triqui[3]==triqui[0]&&triqui[6]==triqui[0]) //vertical izquierda 
                ret=1;
            }
            if(triqui[4]=='X'||triqui[4]=='O') 
            {
                     if (triqui[0] == triqui[4] && triqui[8] == triqui[4]) //diagonal principal "\"
                        ret=1;
                     if (triqui[1] == triqui[4] && triqui[7] == triqui[4]) //vertical central
                        ret=1;
                     if (triqui[3] == triqui[4] && triqui[5] == triqui[4]) //horizontal central
                        ret=1;
                     if (triqui[2] == triqui[4] && triqui[6] == triqui[4]) //diagonal secundaria "/"
                        ret=1;
              }
    
            if(triqui[8]=='X'||triqui[8]=='O')
            {
                       if (triqui[5] == triqui[8] && triqui[2] == triqui[8]) //vertical derecha
                        ret=1;
                       if (triqui[6] == triqui[8] && triqui[7] == triqui[8]) //horizontal inferior
                        ret=1;
            }

            if ((triqui[0] != '1' && triqui[1] != '2' && triqui[2] != '3' &&
                triqui[3] != '4' && triqui[4] != '5' && triqui[5] != '6' &&
                triqui[6] != '7' && triqui[7] != '8' && triqui[8] != '9')) //verificar si todas las posiones estan ocupadas por X o O para declarar empate
                    ret=2;
        return ret;
}

main();