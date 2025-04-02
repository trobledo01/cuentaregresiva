document.addEventListener("DOMContentLoaded", function() {
    // Establecer la fecha objetivo
    const targetDate = new Date('April 3, 2025 12:00:00').getTime();
    
    // URL a la que redirigir cuando termine la cuenta regresiva
    const redirectURL = "https://cartacumple.onrender.com/";

    // Función para redirigir
    function redirectNow() {
        window.open(redirectURL, '_self');
    }

    // Actualizar la cuenta regresiva cada segundo
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);

            // Asegurar que los elementos existen antes de modificar textContent
            const daysElem = document.getElementById("days");
            const hoursElem = document.getElementById("hours");
            const minutesElem = document.getElementById("minutes");
            const secondsElem = document.getElementById("seconds");

            if (daysElem && hoursElem && minutesElem && secondsElem) {
                daysElem.textContent = "00";
                hoursElem.textContent = "00";
                minutesElem.textContent = "00";
                secondsElem.textContent = "00";
            }

            // Intentar redirigir automáticamente después de 3 segundos
            setTimeout(redirectNow, 3000);
        } else {
            // Cálculo del tiempo restante
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Actualizar la cuenta regresiva
            document.getElementById("days").textContent = days.toString().padStart(2, '0');
            document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        }
    }, 1000);
});
