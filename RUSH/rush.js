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

var imprimir_linea = (x, c) => {
    if (x > 0) //si x > 0
    {
        switch (c) {
            case 42: process.stdout.write("*"); break;
            case 92: process.stdout.write("\\"); break;
            case 32: process.stdout.write(" "); break;
            case 47: process.stdout.write("/"); break;
        }

        imprimir_linea(x - 1, c); //se llama a si misma con un x-1
    }
}

var parte_superior = (x) => {
    if (x > 0) //si x > 0
    {
        if (x > 1) //si x > 1
        {
            imprimir_linea(x - 1, 42); //llama a imprimir linea y le entrega un "*"
        }
        process.stdout.write("\\"); //imprime un "\"
    }
}

var parte_media = (x, y) => {
    if (y > 0) //si y > 0
    {
        process.stdout.write("*"); //imprime un *
        if (x > 1) //si x > 1 
        {
            imprimir_linea(x - 2, 32); //llama la funcion y le entrega un espacio en blanco
            process.stdout.write("*"); //imprime un *
        }
        process.stdout.write("\n");
        parte_media(x, y - 1); //se llama asi misma con la altura - 1
    }
}

var parte_inferior = (x) => {
    if (x > 0) // si x > 0
    {
        if (x > 1) // si x > 1
        {
            imprimir_linea(x - 1, 42); //llama la funcion y le entrega un *
        }
        process.stdout.write("/"); //imprime un /
    }
}

var rush = (x, y) => {
    if (x > 0 && y > 0) //si x > 0 and y > 0
    {
        process.stdout.write("/"); //imprime un /
        parte_superior(x - 1); //llama la funcion con un ancho - 1
        if (y > 1) //si y > 1
        {
            process.stdout.write("\n"); //salto de linea
            parte_media(x, y - 2); //parte media con ancho y altura - 2
            process.stdout.write("\\"); //imprime un "\"
            parte_inferior(x - 1); //parte inferior con ancho - 1
        }
    }
}
var ancho = 0, alto = 0; //ancho y alto para guardar el alto y el ancho de la figura
ancho = scanf("%i", "Ingrese el ancho: "); //leer ancho por teclado
alto = scanf("%i", "Ingrese el alto: "); //leer alto por teclado
rush(ancho, alto); //llamado funcion rush
console.log("");
