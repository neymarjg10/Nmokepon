
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonTierra = document.getElementById("boton-tierra")

const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonreiniciar = document.getElementById("boton-reiniciar")

const sectionseleccionarMascota = document.getElementById("seleccionar-Mascota")
const sectionseleccionarataque = document.getElementById("seleccionar-ataque")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enmigo')

const sectionReiniciar = document.getElementById("Reiniciar")
sectionReiniciar.style.display = "none"

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputhipodoge
let inputcapipepo
let inputratigueya
let mascotaJugador
let ataquesmokepon
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new Mokepon("Hipodoge", "./assets/hipodoge.gif", 3)

let Ratigueya = new Mokepon("Ratigueya", "./assets/ratigueya.gif", 3)

let Capipepo = new Mokepon("Capipepo", "./assets/capipepo.gif", 3)


Hipodoge.ataques.push(
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" },
)

Ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-agua" },
    { nombre: "🔥", id: "boton-agua" },
    { nombre: "🔥", id: "boton-agua" },
    { nombre: "💧", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" },
)

Capipepo.ataques.push(
    { nombre: "🌱", id: "boton-agua" },
    { nombre: "🌱", id: "boton-agua" },
    { nombre: "🌱", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-tierra" },
)

mokepones.push(Hipodoge, Ratigueya, Capipepo)


function iniciarjuego() {

    sectionseleccionarataque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}/>
            </label>
            `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputhipodoge = document.getElementById("Hipodoge")
         inputcapipepo = document.getElementById("Capipepo")
         inputratigueya = document.getElementById("Ratigueya")

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonFuego.addEventListener("click", ataqueFuego)

    botonAgua.addEventListener("click", ataqueAgua)

    botonTierra.addEventListener("click", ataqueTierra)

    botonreiniciar.addEventListener("click", Reiniciarjuego)
}


function seleccionarMascotaJugador() {

    sectionseleccionarMascota.style.display = "none"

    sectionseleccionarataque.style.display = "flex"


    if (inputhipodoge.checked) {
        spanMascotaJugador.innerHTML = inputhipodoge.id
        mascotaJugador = inputhipodoge.id
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = inputcapipepo.id
        mascotaJugador = inputhipodoge.id
    } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = inputratigueya.id
        mascotaJugador = inputhipodoge.id
    } else {
        alert("selecciona tu mascota ")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}


function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = o; i < mokepones.length; i++) {
      if (mascotaJugador === mokepones[i].nombre) {
        ataques = mokepones[i].ataques
      }
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
   ataques.forEach((ataques) =>{
    ataquesmokepon = 
    <button id= class= "boton-de-ataque">fuego 🔥</button>
   })
}



function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarvidas()
}

function revisarvidas() {
    if (vidasEnemigo == 0) {
        crearMensajefinal("FELICITACIONES GANASTE! Ganaste :) :) :)")
    } else if (vidasJugador == 0) {
        crearMensajefinal("lo siento, perdiste :( :( :(")
    }
}

function crearMensaje(resultado) {

    let notificacion = document.createElement('p')
    let nuevoataqueDelJugador = document.createElement('p')
    let nuevoataqueDelEnemigo = document.createElement('p')

    notificacion.innerHTML = resultado
    nuevoataqueDelJugador.innerHTML = ataqueJugador
    nuevoataqueDelEnemigo.innerHTML = ataqueEnemigo



    sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoataqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoataqueDelEnemigo)


}


function crearMensajefinal(resultadofinal) {

    sectionMensajes.innerHTML = resultadofinal



    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true


    sectionReiniciar.style.display = "block"
}

function Reiniciarjuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarjuego)
