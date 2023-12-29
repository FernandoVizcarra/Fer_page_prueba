function checkPassword() {
    var password = document.getElementById('password').value;
    if (password === 'melocoton') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        startCountdown();
    } else {
        alert('Contraseña incorrecta.');
    }
}

function startCountdown() {
    var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        updateMessage(distance);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = "¡Ya es 2024!";
        }
    }, 1000);
}

function updateMessage(distance) {
    var secondsInHour = 3600;
    var message = "Mensaje";
    if (distance > (2 * 24 + 12) * secondsInHour * 1000) {
        message = "Mensaje para más de 2 días y 12 horas.";
    } else if (distance > 2 * 24 * secondsInHour * 1000) {
        message = "Mensaje para menos de 2 días y 12 horas pero más de 2 días.";
    } // Continúa con las demás condiciones aquí.
    // ...
    document.getElementById('message').innerHTML = message;
}
