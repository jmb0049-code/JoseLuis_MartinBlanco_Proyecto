// Guardo los elementos para poder controlarlos
const persona = document.getElementById("persona");
const espada = document.getElementById("espada");
const marcador = document.getElementById("marcador");

let score = 0; // Mi contador de puntos

// Función para saltar con el espacio
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        // Solo salto si no estoy ya en el aire
        if (!persona.classList.contains("animar-salto")) {
            persona.classList.add("animar-salto");
            
            // Quito la animación al terminar (medio segundo)
            setTimeout(function() {
                persona.classList.remove("animar-salto");
            }, 500);
        }
    }
});

// Espero un poco al cargar para que el juego no falle
setTimeout(function() {
    
    // Bucle que revisa el juego cada 10ms
    setInterval(function() {
        // Sumo puntos y los muestro
        score++;
        marcador.innerText = "SCORE: " + Math.floor(score / 10);

        // Calculo la posición de la persona y la espada
        let personaTop = parseInt(window.getComputedStyle(persona).getPropertyValue("top"));
        let espadaLeft = parseInt(window.getComputedStyle(espada).getPropertyValue("left"));

        // Si la espada me toca y no estoy saltando: pierdo
        if (espadaLeft < 90 && espadaLeft > 50 && personaTop >= 150) {
            alert("GAME OVER! Puntos: " + Math.floor(score / 10));
            score = 0;
            location.reload(); // Reinicio el juego
        }
    }, 10);

}, 500);