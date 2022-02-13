function dibujarMuneco(puntos) {
    if(puntos == 8) {
        pincel.moveTo(100, 400);
        pincel.lineTo(100, 100);
        pincel.stroke();
    } else if(puntos == 7) {
        pincel.moveTo(100, 100);
        pincel.lineTo(240, 100);
        pincel.stroke();
    } else if(puntos == 6) {
        pincel.moveTo(240, 100);
        pincel.lineTo(240, 130);
        pincel.stroke();
    } else if(puntos == 5) {
        pincel.beginPath();
        pincel.arc(240, 150, 20, 0, Math.PI * 2);
        pincel.stroke();
    } else if(puntos == 4) {
        pincel.beginPath();
        pincel.moveTo(240, 170);
        pincel.lineTo(240, 270);
        pincel.stroke();
    } else if(puntos == 3) {
        pincel.moveTo(240, 270);
        pincel.lineTo(210, 300);
        pincel.stroke();
    } else if(puntos == 2) {
        pincel.moveTo(240, 270);
        pincel.lineTo(270, 300);
        pincel.stroke();
    } else if(puntos == 1) {
        pincel.moveTo(240, 190);
        pincel.lineTo(210, 220);
        pincel.stroke();
    } else if(puntos == 0) {
        pincel.moveTo(240, 190);
        pincel.lineTo(270, 220);
        pincel.stroke();
        alert("Has perdido");
        enJuego = false;
    }
}