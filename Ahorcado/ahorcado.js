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
var clear = () => console.clear()

var verificar = (pal) => {
    var ret = 1;
    for (let i = 0; pal[i] != 00; i = i + 1) {
        if (pal[i] == '_')
            ret = 0;
    }
    return ret;
}
var busqueda = (letra, pal, bus) => {
    var ret = 0;
    for (let i = 0; pal[i] != 00; i = i + 1) {
        if (pal[i] == letra) {
            bus[i] = letra;
            ret = 1;
        }
    }
    return ret;
}
var ahorcado = (pal, bus, letras) => {
    var intentos = 0, print = 0, contletras = 15;
    var letra;
    while (intentos < 7) {
        letra = scanf("%c", "INGRESA UNA LETRA: ");
        print = busqueda(letra, pal, bus);
        if (print == 1) {
            letras[contletras] = letra;
            design(intentos, bus, letras);
        }
        else {
            intentos = intentos + 1;
            letras[contletras] = letra;
            design(intentos, bus, letras);
        }
        if (verificar(bus)) {
            process.stdout.write("!!GANASTE!! - fin del juego");
            return 1;
        }
        contletras = contletras + 1;
    }
}
var design = (opc, pal, letras) => {
    
    clear();
    process.stdout.write("JUEGO AHORCADO\n");
    var palabra="", letra="";

    for(let i = 0;pal[i]!=null;i++) {
        palabra+= pal[i];
    }
    for(let i = 0;letras[i]!=null;i++) {
        letra+= letras[i];
    }
    if (opc == 0) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|         ${palabra}\n`);
        process.stdout.write(`|\n`);
        process.stdout.write(`|\n`);
        process.stdout.write(`|         ${letra}\n`);
        process.stdout.write(`----\n`);
    }
    else if (opc == 1) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|    0    ${palabra}\n`);
        process.stdout.write(`|\n`);
        process.stdout.write(`|\n`);
        process.stdout.write(`|         ${letra}\n`);
        process.stdout.write(`----\n`);
    }
    else if (opc == 2) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|    0    ${palabra}\n`);
        process.stdout.write(`|   /\n`);
        process.stdout.write(`|\n`);
        process.stdout.write(`|         ${letra}\n`);
        process.stdout.write(`----\n`);
    }
    else if (opc == 3) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|    0    ${palabra}\n`);
        process.stdout.write(`|   /|\n`);
        process.stdout.write(`|\n`);
        process.stdout.write(`|         ${letra}\n`);
        process.stdout.write(`----\n`);
    } 
    else if (opc == 4) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|    0    ${palabra}\n`);
        process.stdout.write(`|   /|\\ \n`);
        process.stdout.write(`|\n`);
        process.stdout.write(`|         ${letra}\n`);
        process.stdout.write(`----\n`);
    }
    else if (opc == 5) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|    0    ${palabra}\n`);
        process.stdout.write(`|   /|\\ \n`);
        process.stdout.write(`|    |\n`);
        process.stdout.write(`|         ${letra}\n`);
        process.stdout.write(`----\n`);
    }
    else if (opc == 6) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|    0    ${palabra}\n`);
        process.stdout.write(`|   /|\\ \n`);
        process.stdout.write(`|    |\n`);
        process.stdout.write(`|   /     ${letra}\n`);
        process.stdout.write(`----\n`);
    }
    else if (opc == 7) {
        process.stdout.write(`+----+\n`);
        process.stdout.write(`|    0    ${palabra}\n`);
        process.stdout.write(`|   /|\\ \n`);
        process.stdout.write(`|    |\n`);
        process.stdout.write(`|   / \\  ${letra}\n`);
        process.stdout.write(`----\n`);
        process.stdout.write(`!!PERDISTE!! - Intentalo la proxima...\n`);
    }
}
var inicio = (pal, bus, letras) => {
    palabras(pal);
    for (var i = 0; pal[i] != null; i = i + 1)
        bus[i] = '_';
    bus[i]=null;
    design(0, bus, letras);
    process.stdout.write("\n");
}
var palabras = (pal) => {
    var opc = Math.round(Math.random() * 10);
    var pala
    if (opc == 0)
        pala= "ola";
    else if (opc == 1)
        pala= "pollito";
    else if (opc == 2)
        pala= "murcielago";
    else if (opc == 3)
        pala= "universidad";
    else if (opc == 4)
        pala= "pereira";
    else if (opc == 5)
        pala= "reloj";
    else if (opc == 6)
        pala= "musculo";
    else if (opc == 7)
        pala= "orfanato";
    else if (opc == 8)
        pala= "numero";
    else if (opc == 9)
        pala= "pajaro";

    for(var i=0; pala[i]!=null; i++)
        pal[i]=pala[i];

    pal[i]=null;
    return;
}

var pal_ale = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var pal_aho = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var letras = ["L","E","T","R","A","S"," ","U","S","A","D","A","S",":"," ","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
inicio(pal_ale, pal_aho, letras);
ahorcado(pal_ale, pal_aho, letras);
console.log("");