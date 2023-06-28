var campo = document.getElementById("campovillaplatzi")
var lienzo = campo.getContext("2d");
var mapa = "img/tile.png";

var fondo = new Image();
fondo.src = "img/tile.png";
fondo.addEventListener("load", dibujoCampos);

var vacas = new Image();
vacas.src = "img/vaca.png";
vacas.addEventListener("load", dibujoVacas);


function dibujoCampos() {
    lienzo.drawImage(fondo, 0, 0);

}

function dibujoVacas() {
    
    for(var i=0; i < 10; i++){
        lienzo.drawImage(vacas, 100, 100);
    }

}






// y esta es la funcion que ejecuta el numero aleatorio.
function numeros(mini, maxi) {
    var aleatorio;
    aleatorio = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return aleatorio;
}







/*var z; // se declara una variable

// se realiza un for que indica que va a sumar i que va desde que i sea menr a 10
for (var i=0; i < 10; i++) {
    z = numeros(10, 20);
    document.write( z + " ,");    
}

// y esta es la funcion que ejecuta el numero aleatorio.
function numeros(mini, maxi) {
    var aleatorio;
    aleatorio = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return aleatorio;
}*/
