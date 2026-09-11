let seleccion = document.getElementById("seleccion");
let maxGoleador = document.getElementById("maxGoleador");
let balonDeOro = document.getElementById("balonDeOro");
let partido = document.getElementById("partido");
let goat = document.getElementById("goat");
let resultado = document.getElementById("respuesta");
let btn = document.getElementById("boton");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    resultado.innerHTML = "Seleccíon:  " + seleccion.value + "<br>" + " Máximo Goleador:  " + maxGoleador.value + "<br>" + "Máximo Ganador del Ballon d'Or:  " + balonDeOro.value + "<br>" +  " Mi partdio mas triste fue:  " + partido.value + "<br>"+"El GOAT es:   " + goat.value;
    console.log(resultado.innerHTML);
});