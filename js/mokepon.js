function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputhipodoge = document.getElementById("hipodoge")
    let inputcapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputhipodoge.checked) {
        spanMascotaJugador.innerHTML = "hipodoge"
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = "capipepo"
    } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = "ratigueya"
    } else {
        alert("selecciona tu mascota o estas sordo")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)
