let btnIniciar = document.querySelector("#iniciar-juego");
let tablero = document.querySelector("#ahorcado");
let pincel = tablero.getContext("2d");
let listaDePalabras = ["HTML", "ALURA", "JAVA", "CSS", "ORACLE", "LATAM"];
let palabraElegida = "";
let palabraEnJuego = [];
let puntosUsuario = 9;
let enJuego = false;
let listaLetras = [];
pincel.lineWidth = 3;
pincel.strokeStyle = "blue";

btnIniciar.addEventListener("click", () => {
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    let numeroAzar = Math.floor(Math.random()*listaDePalabras.length);
    palabraElegida = listaDePalabras[numeroAzar];
    pincel.beginPath();
    palabraEnJuego = [];
    listaLetras = [];
    puntosUsuario = 9;
    enJuego = true;
    for(let i = 0; i < palabraElegida.length; i++) {
        pincel.moveTo((300 + (i * 50)), 400);
        pincel.lineTo((340 + (i * 50)), 400);
        pincel.stroke();
    }
});

window.addEventListener("keydown", (element) => {
    console.log(enJuego);
    if(enJuego) {
        jugando(element);
    }
});

function dibujarLetra(letra, posicion) {
    pincel.beginPath();
    pincel.fillStyle = "blue";
    pincel.font = "bold 30px 'arial'";
    pincel.fillText(letra, (310 + (posicion * 50)), 390);
}

function jugando(element) {
    if (listaLetras.includes(element.key.toUpperCase())) {
        alert(`Ya uso la letra ${element.key.toUpperCase()}.`);
    } else {
        listaLetras.push(element.key.toUpperCase());
        console.log(palabraElegida);
        let bandera = false;
        if(puntosUsuario <= 0) {
          alert("Has perdido");
          enJuego = false;
        } else if(!(palabraEnJuego.join("") == palabraElegida)) {
            for(let i = 0; i < palabraElegida.length; i++) {
                if(element.key.toUpperCase() == palabraElegida[i]) {
                    dibujarLetra(element.key.toUpperCase(), i);
                    palabraEnJuego[i] = element.key.toUpperCase();
                    bandera = true;
                }
            }
            if(palabraEnJuego.join("") == palabraElegida) {
                alert("Has ganado");
                enJuego = false;
            }
            if(!bandera) {
                puntosUsuario--;
                dibujarMuneco(puntosUsuario);
            }
            console.log(palabraEnJuego);
            console.log(puntosUsuario);
        } else {
            alert("Has ganado");
            enJuego = false;
        }
    }
}