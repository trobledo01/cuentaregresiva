const targetDate = new Date('April 1, 2025 18:30:00').getTime();
        
        // URL a la que redirigir cuando termine la cuenta regresiva
        // Reemplaza esta URL con la dirección del código HTML externo que deseas usar
        const redirectURL = "https://www.google.com/search?q=google&oq=goo&gs_lcrp=EgRlZGdlKhcIABBFGDsYQxiDARixAxiABBiKBRj5BzIXCAAQRRg7GEMYgwEYsQMYgAQYigUY-QcyEggBEAAYQxiDARixAxiABBiKBTINCAIQABiDARixAxiABDISCAMQABhDGIMBGLEDGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyDAgFEAAYQxiABBiKBTIGCAYQRRg5MgYIBxBFGDwyBggIEEUYPNIBCDEwODRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"; 
        
        // Actualizar la cuenta regresiva cada segundo
        const countdown = setInterval(function() {
            // Obtener la fecha y hora actual
            const now = new Date().getTime();
            
            // Calcular la diferencia entre la fecha objetivo y la actual
            const distance = targetDate - now;
            
            // Calcular días, horas, minutos y segundos
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Mostrar los resultados con formato de dos dígitos
            document.getElementById("days").textContent = days.toString().padStart(2, '0');
            document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
            
            // Si la cuenta regresiva ha terminado
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("days").textContent = "00";
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";
                document.getElementById("message").textContent = "¡El momento ha llegado!";
                
                // Redirigir a la página externa después de 3 segundos
                setTimeout(function() {
                    window.location.href = redirectURL;
                }, 3000);
            }
        }, 1000);