let iconos = []
let selecciones = []
var color = "rgb(138, 241, 127)"
generarTablero()

function cargarIconos() {
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
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
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
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        } else {
            trasera1.style.background = color;
            trasera2.style.background = color;
        }
    }, 1000);
}