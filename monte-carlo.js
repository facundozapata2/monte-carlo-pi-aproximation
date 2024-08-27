// Selecciona elementos
const cuadrado = document.querySelector('.cuadrado');
const insideCount = document.getElementById('insideCount');
const insideCircleCount = document.getElementById('insideCircleCount');
const piApproximation = document.getElementById('piApproximation');
const piFormulaDisplay = document.getElementById('piFormula');
const resetBtn = document.getElementById('resetBtn');

// Variables para contar los puntos
let totalPoints = 0;
let insideCirclePoints = 0;

// Función para actualizar los displays
function updateDisplays() {
    insideCircleCount.textContent = insideCirclePoints;
    insideCount.textContent = totalPoints;

    // Calcular la aproximación de Pi
    if (totalPoints === 0) {
        piApproximation.textContent = '0';
        piFormulaDisplay.textContent = '4 × (0 / 0) = 0';
    } else {
        const piApprox = (insideCirclePoints / totalPoints) * 4;
        piApproximation.textContent = piApprox.toFixed(4);
        piFormulaDisplay.textContent = `4 × (${insideCirclePoints} / ${totalPoints}) = ${piApprox.toFixed(4)}`;
    }
}

// Event listener para el cuadrado
cuadrado.addEventListener('click', function(event) {
    // Obtener el rectángulo del cuadrado
    const rect = cuadrado.getBoundingClientRect();

    // Coordenadas del clic en relación con el cuadrado
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Radio del círculo (es la mitad del ancho del cuadrado)
    const radius = rect.width / 2;

    // Coordenadas del centro del círculo
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calcular la distancia desde el punto clicado al centro del círculo
    const distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

    // Verificar si el punto está dentro del círculo
    if (distanceToCenter <= radius) {
        insideCirclePoints++;
    }

    totalPoints++;
    updateDisplays();
});

// Función para reiniciar el conteo
function reset() {
    totalPoints = 0;
    insideCirclePoints = 0;
    updateDisplays();
}

// Configura el evento para el botón de reinicio
resetBtn.addEventListener('click', reset);
