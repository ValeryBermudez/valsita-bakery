//about functions--------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const targetYear = 2024;
    let count = 0;

    // Función para incrementar el contador hasta el año objetivo
    function incrementCounter() {
        if (count < targetYear) {
            count += 11; // Incrementa el contador en 1
            counterElement.textContent = count;
        } else {
            clearInterval(interval); // Detiene el intervalo cuando se alcanza el año objetivo
        }
    }

    // Inicia el contador rápidamente
    incrementCounter();

    // Intervalo para actualizar el contador rápidamente
    const interval = setInterval(incrementCounter, 0.01);
});

function scrollToContact() {
    window.location.href = 'contact.html';
}