var rellenar_array = (laberinto) => {
	let filas = 0; //contador para las filas
	let col = 0; //contador para las columnas
	for(filas; filas <= 29; filas=filas+1) //for para filas
	{
		for(col = 0; col <= 29; col=col+1) //for para columnas
		{
			if(filas == 0 || filas == 29 || col == 0 || col == 29) //condicion para generar los bordes del laberinto
			{
				laberinto[(filas*30)+col] = 0; //muro del borde del laberinto
			}
			else
			{
				if(Math.round(Math.random() * 4) == 0) //numeros aleatorios entre 0 y 3 para 25%
				{
					laberinto[(filas*30)+col] = 0; //25% de probabilidad de muro
				}//fin del if
				else
				{
					laberinto[(filas*30)+col] = 1; //75% de probabilidad de espacio en blanco
				}//fin del else
			}
		}//fin for columnas
	}//fin for filas

	//creacion de una entrada
	laberinto[0] = 1;  
	laberinto[1] = 1;   
	laberinto[30] = 1;  
	laberinto[31] = 1; 

	laberinto[((Math.floor(Math.random() * 28) + 1) * 30) + 29] = 2; //salida 

}//fin definicion rellenar_array

var imprimir_array = (laberinto, hallado) => {//en hallado se almacena el resultado de la funcion solucion que puede ser un 1 o un 0
//posteriormente se preguntara si esta es verdadera o falsa para saber si el laberinto tiene una solucion
	let filas = 0; //contador para las filas
	let col = 0;	//contador para las columnas
	process.stdout.write("                       1         2         \n");
	process.stdout.write("             012345678901234567890123456789\n");
	for(filas; filas <= 29; filas=filas+1) //for filas
	{
		if(filas == 0) //entrada
			process.stdout.write("Entrada-> 0  ");
		else if(filas < 10 && filas >= 1)
			process.stdout.write(`          ${filas}  `);
		else
			process.stdout.write(`          ${filas} `);
		for(col = 0; col <= 29; col=col+1) //for para columnas
		{
			switch(laberinto[(filas*30)+col])
			{
				case 0: //caso 0 para muros
					process.stdout.write(`█`); //imprimir muro
					break; //fin caso 0
				case 2: //caso 2 para salida
				{
					if(hallado==1) //si se encontro salida
					process.stdout.write(`®  -> Salida`);
					//fin del if
					else
					process.stdout.write(` -> Salida`); //imprimir "--> salida"
					//fin del else
				}
					break; // fin caso 2
				case 3: //caso 3 para imprimir el unico camino
					process.stdout.write("®"); //imprimir "®" para el camino
					break; //fin del caso 3
				case 4: //caso 3 para imprimir el unico camino
					process.stdout.write("░"); //imprimir "®" para el camino
					break; //fin del caso 3
				default:
					if(laberinto[(filas*30)+col] == 4 && hallado == 0) //si no se encontro salida
						process.stdout.write("░"); //imprime un caracter por donde recorrio, indicando que recorrio el laberinto pero no encontro salida
					else
						process.stdout.write(" "); //imprime espacios en blanco
			}//fin del switch
		}//fin for columnas
		process.stdout.write("\n");
	}//fin for filas


	if(hallado==1) //si la solucion fue hallada
	{
		process.stdout.write("\n\t       la solucion fue encontrada\n");
	} //fin del if
	else
	{
		process.stdout.write("\n\t      la solucion no fue encontrada\n");
	} //fin del else
	return;
}//fin definicion imprimir_array

var solucion = (laberinto, filas, col) => {
    if(laberinto[(filas*30)+col] == 2) // si se encuentra un 2 se encuentra una salida
	{
    	return 1;
	}// fin del if 
	else 
	{
		if(laberinto[(filas*30)+col] == 1 && col >= 0 && col <= 29 && filas >= 0 && filas <= 29) //si hay un espacio en blanco y esta dentro de los limites
		{
			laberinto[(filas*30)+col] = 3; // se reemplaza un 3 para posteriormente imprimir el camino

        	if(solucion(laberinto, filas, col + 1) || //derecha
				solucion(laberinto, filas + 1, col) || //abajo
           		solucion(laberinto, filas - 1, col) || //arriba
           		solucion(laberinto, filas, col - 1)) //izquierda
			{
           		return 1;
        	}//fin del if
			else
			{
        		laberinto[(filas*30)+col] = 4; // se reemplaza un 4 para posteriormente imprimir un recorrido en caso de no encontrar salida
			}//fin del else
		} // fin del if
	}//fin del else
    return 0;
}// fin definicion solucion
	
	var laberinto = [];// Creacion de variable para almacenar el laberinto
	rellenar_array(laberinto);//Generacion del laberinto en forma aleatoria y sus bordes
	imprimir_array(laberinto, solucion(laberinto, 0, 0)/*aca se halla la solucion
	al laberinto, devuelven 1 si se encuentra y cero si no hay salida*/);/*aca se
	imprime el array ya solucionado*/
