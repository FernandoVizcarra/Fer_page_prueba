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
        message = "Hola Lilia, o como diria Fer: \n\n´Nerita, que pasa, estás ansiosa o que pasa causaaaa gaaaaaa, espero que disfrutes tu viaje´.\n\n Es interesante la dinamica lexical de Fer, que tal si le regalamos un libro de vez en cuando Jejeje.\n\nCada medio día (12 pm) y media noche (12 am), habrá más y nuevos mensajes o historias";
    } else if (distance > (1 * 24 + 12)* 60 * 60 * 1000) {
        message = "No albergo un orgullo desmedido por mi ser, pero \nes en la soledad del bosque, o tumbado sobre la \narena de la playa, donde encuentro un equilibrio \nsereno, una paz fugaz.\n\nLa historia de Fer y Emilia se despliega ante \nnosotros; una narrativa tejida con hilos de \nrealidad y suposiciones delicadas sobre la \npsique de sus personajes. Cada similitud con la \nvida real, cada desviación de la verdad, es un \njuego del azar, un capricho del destino, mera \ncoincidencia.\n\nTodos por naturaleza deseamos ser amados, \naunque no todos buscan participar activamente \ndel amor, hay quienes prefieren ser amados antes \nde amantes. Reflexionando en las palabras de \nPlatón en ´El Fedro´ - ´Es más digno de elogios \naquel que ama´, o en palabras de Albert Camus \n´No ser amados es una simple desventura, la \nverdadera desgracia es no amar´, de cualquier \nmanera comprendo que el amor trasciende la mera \nesfera romántica. Veo el amor en cada esquina \ndel universo, y abrazo incluso a aquellos que \nreniegan de su existencia, comprendiendo que su \nnihilismo o escepticismo erórico es el resultado \nde una herida no sanada.\n\nPara experimentar el amor en su totalidad, en \nsu misterioso y embriagador esplendor, es \nesencial creer en él, sumergirse en sus rituales \nolvidados, alejarse de la fría luz de las \npantallas y dedicarse a la tinta y los óleos. \n¿Acaso no reside en nuestra comprensión del \namor, la forma en que lo vivimos y lo \nmanifestamos?";
    } else if (distance > 1 * 24 * 60 * 60 * 1000) {
        message = "En la intimidad de su sueño, Emilia, inconsciente del mundo, liberaba esos \nestruendosos gases, testimonio de su humanidad más elemental, esas \nidiosincrasias que la definían, que la hacían única. Fer, sumido en la \nnostalgia, reconoce que son precisamente esas peculiaridades, que para \notros podrían ser defectos, las que más añora, las que forjan la \nsingularidad de un ser.\n\nTras años sin verla, Fer alberga el temor de desencantarse, de \ndescubrir en Emilia a una desconocida o, aún más aterrador, de \ndecepcionarla y ser rechazado. Comprende que las imperfecciones y la \nvulnerabilidad son esenciales en cualquier vínculo humano, pues es en \nla desnudez emocional donde germina la verdadera conexión. Cuando \nalguien nos ve en nuestra totalidad y, a pesar de ello, elige compartir \nnuestra existencia, ahí nace un amor profundo y auténtico.\n\nEmilia, por su parte, se debate entre el deseo de revivir aquella pasión \nirracional que alguna vez compartió con Fer y el temor paralizante de \ndar el primer paso hacia él, anticipando siempre el fracaso. Inteligente y \nexitosa profesionalmente, Emilia logra atraer a clientes y pretendientes, \npero se reprime, temerosa de arriesgar y sufrir. Anhela nuevos \nhorizontes, pero su miedo a la decepción, a ser herida o abandonada, la \nmantiene atada a lo conocido, a su pequeño mundo seguro, justificando \nsu inacción con la racionalización de sus temores.\n\nFer, en su soledad, ha comprendido que ha perdido un amor \nverdadero, que su corazón quedará destrozado, y también sabe que \nnunca superará completamente esa pérdida. Es como tener un dedo \nroto que no sanó del todo, y todavía duele cuando hace frio … aprendes \na convivir con ello. Entiende que el duelo es un tributo al amor perdido, \nun proceso que no termina porque el amor tampoco lo hace. El duelo es \nel precio del amor, pero, a pesar del dolor, Fer no cambiaría ni un ápice \nde lo vivido, pues la felicidad de haber amado a Emilia supera cualquier sufrimiento.";
    } else if (distance > 0 * 24 * 60 * 60 * 1000) {
        message = "\nAmar es tenerlo todo y hacerlo cada día mas imposible. \n\nEn aquel relato de Hemingway ´Colinas como elefantes blancos´, una \npareja, no solo discute sobre la práctica del aborto, sino que, sin \nsaberlo, abren los anhelos de sus propias almas. Y es aquí, en este \nlaberinto de palabras no dichas y verdades a medias, donde emerge la \ntrágica belleza del amor.\n\nEl amor se manifiesta como una dualidad eterna: es posesión absoluta \ny a la vez una carrera hacia lo imposible. Consideremos, por ejemplo, \nlos sacrificios inherentes al acto de amar: para la mujer, tal vez, \nsignifica renunciar a pretendientes, viajes, estudios, a un sinfín de \nposibilidades que se desvanecen en el horizonte. Para el hombre, es la \npérdida de potencialidades, la abdicación de ciertas libertades, el \nocaso de la fama o la fortuna, todo en aras de un compromiso \ncompartido.\n\nLa fortaleza del amor, entonces, se mide por la resistencia de la \npareja a este sacrificio cotidiano, a la perdida constante de sus \npotenciales individuales.\n\nObservemos el caso de Johnny Depp y Amber Heard: un espiral \ndescendente donde cada sacrificio, en lugar de fortalecer, corroía el \nnúcleo de su vínculo, dejando a su paso solo ruinas de lo que alguna \nvez fueron.\n\nEn contraste, Romeo y Julieta, iconos eternos del amor juvenil, \neligieron el sacrificio absoluto, renunciando a todo potencial \nterrenal por la inmortalidad de su amor.\n\nEn el mundo del deporte, Messi y Antonella, donde uno se eleva a la \ncúspide de su potencial mientras el otro sostiene y nutre ese ascenso \ndesde la sombra.\n\nY qué decir de Fer y Emilia, reflejo de tantas historias \ncontemporáneas, donde la promesa del amor se desvanece ante la \nabrumadora percepción de lo que se podría alcanzar en solitario.\n\nEn este 2024, en una era dominada por la omnipresencia de las \npantallas, los viajes, fiestas, y un sinfín de tentaciones, la \nsobreestimación del yo ha eclipsado el deseo de sacrificarse por el \notro. En este teatro de amor moderno, son contados los que eligen \nabrazar el amor, con su belleza y sus desafíos, desafiando la \ntendencia contemporánea a priorizar el ´yo´ sobre el ´nosotros´.";
    }
    message = message.replace(/\n/g, "<br>");
    document.getElementById('message').innerHTML = message;
}
