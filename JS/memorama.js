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

var validar = (mem) => {
    var ret=0;
    for(let cont=0;cont<=15;cont=cont+1)
    {
        if(mem[cont]!='0')
            ret=ret+1;
    }
    return ret;
}
var imprimir = (mem,opc) => {
    if(opc==0)
    {
        process.stdout.write(" --------------- \n");
        process.stdout.write("|  1|  2|  3|  4|\n");
        process.stdout.write(" --------------- \n");
        process.stdout.write("|  5|  6|  7|  8|\n");
        process.stdout.write(" --------------- \n");
        process.stdout.write("|  9| 10| 11| 12|\n");
        process.stdout.write(" --------------- \n");
        process.stdout.write("| 13| 14| 15| 16|\n");
        process.stdout.write(" --------------- \n");
    }
    else if(opc==1)
    {
        process.stdout.write(" --------------- \n");
    for(let i=1;i<=16;i=i+1)
    {
        process.stdout.write("| ");
        if(mem[i-1]>='A'&&mem[i-1]<='H')
        {
            process.stdout.write(`${mem[i-1]} `);
        }
        else if(i<=9)
        {
            process.stdout.write(`${i} `);
        }
        else if(i>9)
        {
            process.stdout.write(`${i}`);
        }

        if(i==4||i==8||i==12)
            process.stdout.write("|\n --------------- \n");
    }
    process.stdout.write("|\n---------------- \n");
    process.stdout.write("COINCIDEN\n");
    scanf("%s", "Presione enter para continuar...");
    clear();
    }
    
    return;
}
var rellenar = (mem) => {
    var cont=0;
    for(cont;cont<=15;cont=cont+1)
        mem[cont]="0";
    
    return;
}
var relle =(mem) => {
    let cont=0,pos=0,letra=65;
    while(cont<=15)
    {
        pos= Math.round(Math.random() * 16);
        if(mem[pos]=="0")
        {
            switch(letra){
                case 65: mem[pos]="A"; break;
                case 66: mem[pos]="B"; break;
                case 67: mem[pos]="C"; break;         
                case 68: mem[pos]="D"; break;
                case 69: mem[pos]="E"; break;
                case 70: mem[pos]="F"; break;
                case 71: mem[pos]="G"; break;
                case 72: mem[pos]="H"; break;
            }
            cont=cont+1;
            if(cont%2==0)
            letra=letra+1;
        }
    }
}

var impri = (mem, aux,pos1,pos2,opc,p1,p2) => {
    if(opc==0)
    {
    process.stdout.write(" --------------- \n");
    for(let i=1;i<=16;i=i+1)
    {
        process.stdout.write("| ");
        if(i-1==(pos1-1))
        {
            process.stdout.write(`${mem[pos1-1]} `);
        }
        else if(i-1==(pos2-1))
        {
            process.stdout.write(`${mem[pos2-1]} `);
        }
        else if(aux[i-1]>='A'&&aux[i-1]<='H')
        {
            process.stdout.write(`${aux[i-1]} `,);
        }
        else if(i<=9)
        {
            process.stdout.write(`${i} `);
        }
        else if(i<=9)
        {
            process.stdout.write(`${i} `);
        }
        else if(i>9)
        {
            process.stdout.write(`${i}`);
        }
        if(i==4||i==8||i==12)
            process.stdout.write("|\n --------------- \n");
    }
    process.stdout.write("|\n   ------------ \n");
    process.stdout.write("NO COINCIDEN\n");
    scanf("%s","Presiona enter para continuar");
    clear();
    }
    else
    {
     process.stdout.write(" --------------- \n");
    for(let i=1;i<=16;i=i+1)
    {
        process.stdout.write("| ");
        if(aux[i-1]>='A'&&aux[i-1]<='H')
        {
            process.stdout.write(`${aux[i-1]} `);
        }
        else if(i<=9)
        {
            process.stdout.write(`${i} `);
        }
        else if(i>9)
        {
            process.stdout.write(`${i}`);
        }

        if(i==4||i==8||i==12)
            process.stdout.write("|\n --------------- \n");
    }
    process.stdout.write("|\n --------------- \n");
    process.stdout.write(`PUNTAJE JUGADOR 1: ${p1}`);
    process.stdout.write(`\nPUNTAJE JUGADOR 2: ${p2}\n`);
    }
}
var memo = (mem,aux) => {
    var jugador1="", jugador2="",actual="";
    var p_1=0,p_2=0,cont=0,pos1=0, pos2=0, error=0,val=1;

    jugador1 = scanf("%s","Ingresa el nombre del jugador 1: ");
    jugador2 = scanf("%s","Ingresa el nombre del jugador 2: ");
    clear();
    do
    {
        error=0;
        clear();
        impri(mem,aux,0,0,1,p_1,p_2);
        if(cont%2==0)
            actual = jugador1;
        else
            actual = jugador2;

        pos1 = scanf("%i",`${actual} Por favor ingresa la primera posicion: `);
        pos2 = scanf("%i",`${actual} Por favor ingresa la primera posicion: `);
        clear();
        if(pos1<=0 || pos1>=17)
        {
            error=1;
            scanf("%s","Posicion 1 invalida, presione enter para continuar...");
            clear();
        }
        else if(pos2<=0 || pos2>=17)
        {
            error=1;
            scanf("%s","Posicion 2 invalida, presione enter para continuar...");
            clear();
        }
        else if(pos1==pos2)
        {
            error=1;
            scanf("%s","Las posiciones son iguales, presione enter para continuar...");
            clear();
        }
        if(error==0)
        {
        if(aux[pos1-1]!='0')
        {
            error=1;
            scanf("%s","Posicion 1 ya jugada, presione enter para continuar...");
            clear();
        }
        else if(aux[pos2-1]!='0')
        {
            error=1;
            scanf("%s","Posicion 2 ya jugada, presione enter para continuar...");
            clear();
        }
        }
        if(error==0)
        {
            if(mem[pos1-1]==mem[pos2-1])
            {
                aux[pos1-1]=mem[pos1-1];
                aux[pos2-1]=mem[pos2-1];
                imprimir(aux,1);
                error=1;
                if(cont%2==0)
                    p_1=p_1+1;
                else
                    p_2=p_2+1;
            }
            else
            {
                impri(mem,aux,pos1,pos2,0,p_1,p_2);
            }
        }

        if(error==0)
            cont=cont+1;

        val=validar(aux);
    } while (val!=16);

    impri(mem,aux,pos1,pos2,1,p_1,p_2);
    if(p_1>p_2)
        process.stdout.write("\nEl jugador 1 gana....");
    else if(p_2>p_1)
        process.stdout.write("\nEl jugador 2 gana....");
    else if(p_1==p_2)
        process.stdout.write("\nEMPATE");

}

var mem=["","","","","","","","","","","","","","","",""];
var aux=["","","","","","","","","","","","","","","",""];
rellenar(mem);
rellenar(aux);
relle(mem);
memo(mem,aux);