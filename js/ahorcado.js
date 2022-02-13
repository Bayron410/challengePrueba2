let btnIniciar = document.querySelector("#iniciar-juego");
let tablero = document.querySelector("#ahorcado");
let pincel = tablero.getContext("2d");
let listaDePalabras = ["HTML", "ALURA", "JAVA", "CSS", "ORACLE", "LATAM"];
let palabraElegida = "";
pincel.lineWidth = 3;
pincel.strokeStyle = "blue";

btnIniciar.addEventListener("click", () => {
    let numeroAzar = Math.floor(Math.random()*listaDePalabras.length);
    palabraElegida = listaDePalabras[numeroAzar];
    pincel.beginPath();
    for(let i = 0; i < palabraElegida.length; i++) {
        console.log("Entramos por posicion" + i);
        pincel.moveTo(200, 400);
        pincel.lineTo(240, 400);
        pincel.stroke();
    }
});