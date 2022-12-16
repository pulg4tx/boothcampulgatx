let iconos = [] //Variable para guardar los diferentes iconos
let selecciones = [] //variable para guardar los numeros de tarjetas ya seleccionadas 
var color = "rgb(138, 241, 127)" //color para cuando se gano
generarTablero() //funcion para primera vez

function cargarIconos() { //cargar los iconos de las tarjetas
    iconos = [
        '<i class="fas fa-star"></i>',
        '<i class="fab fa-rebel"></i>',
        '<i class="fas fa-hat-wizard"></i>',
        '<i class="fab fa-grunt"></i>',
        '<i class="fab fa-phoenix-framework"></i>',
        '<i class="fab fa-optin-monster"></i>',
        '<i class="fab fa-d-and-d"></i>',
        '<i class="fas fa-rocket"></i>',
        '<i class="fas fa-yin-yang"></i>',
        '<i class="fas fa-chess-knight"></i>',
        '<i class="fab fa-apple"></i>',
        '<i class="fas fa-wine-bottle"></i>',
    ]
}

function generarTablero() {
    cargarIconos() //cargamos los iconos en el arreglo
    selecciones = []
    let tablero = document.getElementById("tablero") //obtener la clase
    let tarjetas = [] //variable para gurdar las tarjetas
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                        <i class="fas fa-vihara"></i>
                        </div>
                    </div>
                </div>        
                `) 
        if (i % 2 == 1) {
            iconos.splice(0, 1) //eliminar de el arreglo
        }
    }
    tarjetas.sort(() => Math.random() - 0.5) //ordenar de forma aleatoria
    tablero.innerHTML = tarjetas.join(" ") //agregar el codigo. (innerHTML reemplaza en el codigo HTML) (.join convierte el arreglo en una cadena de texto separada con un espacio)
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i) //obtiene el contenido de la etiqueta con el ID
    if (tarjeta.style.transform != "rotateY(180deg)") { //sino esta volteada
        tarjeta.style.transform = "rotateY(180deg)" //la voltea
        selecciones.push(i) //pone el numero de la tarjeta en el arreglo selecciones
    }
    if (selecciones.length == 2) { //cuando esten dos seleccionadas
        deseleccionar(selecciones) //las deseleccionamos
        selecciones = [] //reiniciamos las tarjetas seleccionadas
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => { //setTimeout es para darle tiempo
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) { //si el html de las 2 tarjetas es diferente no coinciden las tarjetas
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)" //la volteamos de nuevo
            tarjeta2.style.transform = "rotateY(0deg)" //la volteamos de nuevo
        } else { //si coinciden
            trasera1.style.background = color; //cambiamos el color
            trasera2.style.background = color; //cambiamos el color
        }
    }, 1000); //1000 milisegundos = 1 segundo
}