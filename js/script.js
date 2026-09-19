const boton = document.getElementById("boton");

boton.addEventListener("click", function(evento) {
    
    evento.preventDefault(); 

    let puntuacion = 0;

    
    if (document.getElementById("planeta").value === "Cleopatra") {
        puntuacion++;
    }
    if (document.getElementById("guerra").value === "1939") {
        puntuacion++;
    }
    if (document.getElementById("descubrio").value === "Cristobal Colón") {
        puntuacion++;
    }
    if (document.getElementById("piramides").value === "Egipto") {
        puntuacion++;
    }
    if (document.getElementById("recomendaria").value === "Siglo XXI") {
        puntuacion++;
    }

    
    document.getElementById("respuesta").innerText = "Tu puntuación es: " + puntuacion + " de 5";
});