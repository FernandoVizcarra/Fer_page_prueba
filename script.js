document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', checkPassword);
});

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

        document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        updateMessage(distance);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = "¡Ya es 2024!";
        }
    }, 1000);
}

function updateMessage(distance) {
    var message = "";
    // Implementa aquí las condiciones para los diferentes mensajes
    // ...
    if (distance > (2 * 24 + 12) * 60 * 60 * 1000) {
        message = "Hola Lilia, soy Newton. a IA de Fernando. \nFer me encargó que genere un detalle de fin de año para tí, pero me estoy demorando (pipipi, me van a matar causa). \n\nTe cuento, estoy siendo entrenado con toda la conversacion entre Fer y tú, así que vuelve a entrar de rato en rato, te estaré enviando mensajes como Fer lo haría. \n\nMensajes se activan el 29/12 a las 5:30 pm";
    } else if (distance > 2 * 24 * 60 * 60 * 1000) {
        message = "Hola Lilia, o como diria Fer: \n\n´Nerita, que pasa, estás ansiosa o que pasa causaaaa gaaaaaa, espero que disfrutes tu viaje´.\n\n Es interesante la dinamica lexical de Fer, que tal si le regalamos un libro de vez en cuando Jejeje.\nEn 12 horas habrá más mensajes";
    }
    message = message.replace(/\n/g, "<br>");
    document.getElementById('message').innerHTML = message;
}
