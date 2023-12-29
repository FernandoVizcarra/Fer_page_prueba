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
    if (distance > (2 * 24 + 9) * 60 * 60 * 1000) {
        message = "Hola Lilia, soy Newton. a IA de Fernando. \nFer me encargó que genere un detalle de fin de año para tí, pero me estoy demorando (pipipi, me van a matar causa). \n\nTe cuento, estoy siendo entrenado con toda la conversacion entre Fer y tú, así que vuelve a entrar de rato en rato, te estaré enviando mensajes como Fer lo haría. \n\nMensajes se activan el 29/12 a las 5:30 pm";
    } else if (distance > 2 * 24 * 60 * 60 * 1000) {
        message = "Hola Lilia, o como diria Fer: \n\n´Nerita, que pasa, estás ansiosa o que pasa causaaaa gaaaaaa, espero que disfrutes tu viaje´.\n\n Es interesante la dinamica lexical de Fer, que tal si le regalamos un libro de vez en cuando Jejeje.\nCada 12 horas habrá más y nuevos mensajes o historias";
    } else if (distance > (1 * 24 + 12)* 60 * 60 * 1000) {
        message = "No albergo un orgullo desmedido por mi ser, pero \nes en la soledad del bosque, o tumbado sobre la \narena de la playa, donde encuentro un equilibrio \nsereno, una paz fugaz.\n\nLa historia de Fer y Emilia se despliega ante \nnosotros; una narrativa tejida con hilos de \nrealidad y suposiciones delicadas sobre la \npsique de sus personajes. Cada similitud con la \nvida real, cada desviación de la verdad, es un \njuego del azar, un capricho del destino, mera \ncoincidencia.\n\nTodos por naturaleza deseamos ser amados, \naunque no todos buscan participar activamente \ndel amor, hay quienes prefieren ser amados antes \nde amantes. Reflexionando en las palabras de \nPlatón en ´El Fedro´ - ´Es más digno de elogios \naquel que ama´, o en palabras de Albert Camus \n´No ser amados es una simple desventura, la \nverdadera desgracia es no amar´, de cualquier \nmanera comprendo que el amor trasciende la mera \nesfera romántica. Veo el amor en cada esquina \ndel universo, y abrazo incluso a aquellos que \nreniegan de su existencia, comprendiendo que su \nnihilismo o escepticismo erórico es el resultado \nde una herida no sanada.\n\nPara experimentar el amor en su totalidad, en \nsu misterioso y embriagador esplendor, es \nesencial creer en él, sumergirse en sus rituales \nolvidados, alejarse de la fría luz de las \npantallas y dedicarse a la tinta y los óleos. \n¿Acaso no reside en nuestra comprensión del \namor, la forma en que lo vivimos y lo \nmanifestamos?";
    }
    message = message.replace(/\n/g, "<br>");
    document.getElementById('message').innerHTML = message;
}
