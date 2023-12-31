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
            document.getElementById('countdown').innerHTML = "¡Feliz 2024!";
        }
        updateBonus(distance)
    }, 1000);
}

function updateMessage(distance) {
    var message = "";
    var imagen1 = '<img src="image1.png" alt="Image1" class="resized-image1">';
    var imagen2 = '<img src="image2.jpg" alt="Image2" class="resized-image">';
    var imagen3 = '<img src="image3.jpeg" alt="Image3" class="resized-image">';
    // Implementa aquí las condiciones para los diferentes mensajes
    // ...
    if (distance > (2 * 24 + 13) * 60 * 60 * 1000) {
        message = "Hola Lilia, soy Newton. a IA de Fernando. \nFer me encargó que genere un detalle de fin de año para tí, pero me estoy demorando (pipipi, me van a matar causa). \n\nTe cuento, estoy siendo entrenado con toda la conversacion entre Fer y tú, así que vuelve a entrar de rato en rato, te estaré enviando mensajes como Fer lo haría. \n\nMensajes se activan el 29/12 a las 5:30 pm";
    } else if (distance > 3 * 24 * 60 * 60 * 1000) {
        message = "Hola Lilia, o como diria Fer: \n\n´Nerita, que pasa, estás ansiosa o que pasa causaaaa gaaaaaa, espero que disfrutes tu viaje´.\n\n Es interesante observar la dinámica léxica de Fer. Considero que sería apropiado regalarle un libro de vez en cuando, ¡jejeje!. \n Actualmente, estoy finalizando mi entrenamiento con los pensamientos y escritos de Fer. \n.He notado que, aunque su trato por chat parece superficial y distante, sus pensamientos revelan una profundidad considerable. \n\n Esta noche, a medianoche, tengo planeado combinar sus chats y pensamientos.";
    } else if (distance > (1 * 24 + 12)* 60 * 60 * 1000) {
        message = "No albergo un orgullo desmedido por mi ser, pero \nes en la soledad del bosque, o tumbado sobre la \narena de la playa, donde encuentro un equilibrio \nsereno, una paz fugaz.\n\nLa historia de Fer y Emilia se despliega ante \nnosotros; una narrativa tejida con hilos de \nrealidad y suposiciones delicadas sobre la \npsique de sus personajes. Cada similitud con la \nvida real, cada desviación de la verdad, es un \njuego del azar, un capricho del destino, mera \ncoincidencia.\n\nTodos por naturaleza deseamos ser amados, \naunque no todos buscan participar activamente \ndel amor, hay quienes prefieren ser amados antes \nde amantes. Reflexionando en las palabras de \nPlatón en ´El Fedro´ - ´Es más digno de elogios \naquel que ama´, o en palabras de Albert Camus \n´No ser amados es una simple desventura, la \nverdadera desgracia es no amar´, de cualquier \nmanera comprendo que el amor trasciende la mera \nesfera romántica. Veo el amor en cada esquina \ndel universo, y abrazo incluso a aquellos que \nreniegan de su existencia, comprendiendo que su \nnihilismo o escepticismo erórico es el resultado \nde una herida no sanada.\n\nPara experimentar el amor en su totalidad, en \nsu misterioso y embriagador esplendor, es \nesencial creer en él, sumergirse en sus rituales \nolvidados, alejarse de la fría luz de las \npantallas y dedicarse a la tinta y los óleos. \n¿Acaso no reside en nuestra comprensión del \namor, la forma en que lo vivimos y lo \nmanifestamos?";
    } else if (distance > 1 * 24 * 60 * 60 * 1000) {
        message = "En la intimidad de su sueño, Emilia, inconsciente del mundo, liberaba esos \nestruendosos gases, testimonio de su humanidad más elemental, esas \nidiosincrasias que la definían, que la hacían única. Fer, sumido en la \nnostalgia, reconoce que son precisamente esas peculiaridades, que para \notros podrían ser defectos, las que más añora, las que forjan la \nsingularidad de un ser.\n\nTras años sin verla, Fer alberga el temor de desencantarse, de \ndescubrir en Emilia a una desconocida o, aún más aterrador, de \ndecepcionarla y ser rechazado. Comprende que las imperfecciones y la \nvulnerabilidad son esenciales en cualquier vínculo humano, pues es en \nla desnudez emocional donde germina la verdadera conexión. Cuando \nalguien nos ve en nuestra totalidad y, a pesar de ello, elige compartir \nnuestra existencia, ahí nace un amor profundo y auténtico.\n\nEmilia, por su parte, se debate entre el deseo de revivir aquella pasión \nirracional que alguna vez compartió con Fer y el temor paralizante de \ndar el primer paso hacia él, anticipando siempre el fracaso. Inteligente y \nexitosa profesionalmente, Emilia logra atraer a clientes y pretendientes, \npero se reprime, temerosa de arriesgar y sufrir. Anhela nuevos \nhorizontes, pero su miedo a la decepción, a ser herida o abandonada, la \nmantiene atada a lo conocido, a su pequeño mundo seguro, justificando \nsu inacción con la racionalización de sus temores.\n\nFer, en su soledad, ha comprendido que ha perdido un amor \nverdadero, que su corazón quedará destrozado, y también sabe que \nnunca superará completamente esa pérdida. Es como tener un dedo \nroto que no sanó del todo, y todavía duele cuando hace frio … aprendes \na convivir con ello. Entiende que el duelo es un tributo al amor perdido, \nun proceso que no termina porque el amor tampoco lo hace. El duelo es \nel precio del amor, pero, a pesar del dolor, Fer no cambiaría ni un ápice \nde lo vivido, pues la felicidad de haber amado a Emilia supera cualquier sufrimiento.";
    } else if (distance > 0 * 24 * 60 * 60 * 1000) {
        message = "\nAmar es tenerlo todo y hacerlo cada día mas imposible. \n\nEn aquel relato de Hemingway ´Colinas como elefantes blancos´, una \npareja, no solo discute sobre la práctica del aborto, sino que, sin \nsaberlo, abren los anhelos de sus propias almas. Y es aquí, en este \nlaberinto de palabras no dichas y verdades a medias, donde emerge la \ntrágica belleza del amor.\n\nEl amor se manifiesta como una dualidad eterna: es posesión absoluta \ny a la vez una carrera hacia lo imposible. Consideremos, por ejemplo, \nlos sacrificios inherentes al acto de amar: para la mujer, tal vez, \nsignifica renunciar a pretendientes, viajes, estudios, a un sinfín de \nposibilidades que se desvanecen en el horizonte. Para el hombre, es la \npérdida de potencialidades, la abdicación de ciertas libertades, el \nocaso de la fama o la fortuna, todo en aras de un compromiso \ncompartido.\n\nLa fortaleza del amor, entonces, se mide por la resistencia de la \npareja a este sacrificio cotidiano, a la perdida constante de sus \npotenciales individuales.\n\nObservemos el caso de Johnny Depp y Amber Heard: un espiral \ndescendente donde cada sacrificio, en lugar de fortalecer, corroía el \nnúcleo de su vínculo, dejando a su paso solo ruinas de lo que alguna \nvez fueron.\n\nEn contraste, Romeo y Julieta, iconos eternos del amor juvenil, \neligieron el sacrificio absoluto, renunciando a todo potencial \nterrenal por la inmortalidad de su amor.\n\nEn el mundo del deporte, Messi y Antonella, donde uno se eleva a la \ncúspide de su potencial mientras el otro sostiene y nutre ese ascenso \ndesde la sombra.\n\nY qué decir de Fer y Emilia, reflejo de tantas historias \ncontemporáneas, donde la promesa del amor se desvanece ante la \nabrumadora percepción de lo que se podría alcanzar en solitario.\n\nEn este 2024, en una era dominada por la omnipresencia de las \npantallas, los viajes, fiestas, y un sinfín de tentaciones, la \nsobreestimación del yo ha eclipsado el deseo de sacrificarse por el \notro. En este teatro de amor moderno, son contados los que eligen \nabrazar el amor, con su belleza y sus desafíos, desafiando la \ntendencia contemporánea a priorizar el ´yo´ sobre el ´nosotros´.";
    } else if (distance < 0 * 24 * 60 * 60 * 1000) {
        message = "\nFuego y agua se enamoran.\nLos opuestos se atraen o solo se generan dolor?\n\nFernando y Emilia, emblemas de opuestos que se atraen, él como el \nfuego, ardiente y tumultuoso, capaz de iluminar y arrasar en un mismo \narrebato; ella, el agua, serenidad fluente, adaptable y calmante. \nDesde el inicio, su unión fue un espectáculo de contrastes: la pasión \ndesbordante de Fernando encontraba su contraparte en la tranquilidad \nde Emilia, y en esa dualidad, hallaron un equilibrio sorprendente.\n\nLa atracción entre ellos era un fenómeno instantáneo, aunque cargado \nde tensiones inherentes. La naturaleza volcánica de Fernando chocaba a \nmenudo con la quietud de Emilia, pero en esa colisión de mundos, \ndescubrieron una sinergia única. Emilia enseñó a Fernando el valor de \nla empatía y la compasión, revelándole cómo la fuerza podía residir en \nla ternura; él, a su vez, le mostró que la determinación podía ser un \ncamino para el bien.\n\nNunca lo aceptarán, pero descubrieron que la irritación y el enojo, \nmalinterpretados con frecuencia, eran en realidad joyas de verdades \nmás profundas que exigían ser confrontadas. Emilia, quien solía \nesquivar el conflicto, aprendió a interpretar su enojo como un impulso \npara enfrentar las injusticias y reivindicar su fortaleza. Fernando, \npor su lado, canalizó su ferocidad hacia la creación, no la destrucción.\n\nEn su amor, no buscaban reflejos de sí mismos, sino cómo sus \ndisparidades se entrelazaban para formar un todo. Donde Fernando era \ntempestad, Emilia era calma; donde ella era reflexión, él era impulso. \nCada uno aportaba aquello que al otro le faltaba, descubriendo así un \nequilibrio en medio de sus divergencias.\n\nNo obstante, su relación estaba lejos de ser un paraiso sin \ndesafíos. Hubo momentos en los que la vehemencia de Fernando resultaba \nabrumadora para Emilia, y ocasiones en las que su serenidad parecía \napagar el fuego en él. Cada desencuentro se convertía en una lección \nsobre ellos mismos y el otro, aunque también les hacía cuestionarse si \nel esfuerzo de estar juntos a futuro merecía la pena.\n\nLa relación los transformó profundamente. La química entre ambos no \nsolo alteró sus emociones, sino que reconfiguró su esencia. Emilia \nencontró en Fernando un amor lleno de aventuras y colores vibrantes, \nmientras él descubrió en ella una paz y comprensión hasta entonces \ndesconocidas.\n\nCuando decidieron tomar rumbos separados, no fue por falta de amor, \nsino por un entendimiento profundo de que su crecimiento individual \ndemandaba nuevos horizontes. El dolor de la separación fue tan real \ncomo la alegría que les proporcionó su amor transformador.\n\nEl amor de Fernando y Emilia fue un testimonio de que la auténtica \ncompatibilidad no radica en la similitud, sino en la complementariedad \ny el crecimiento mutuo. Su historia es un recordatorio de que el amor \nmás profundo y enriquecedor suele surgir del choque y la armonía de \nnuestras diferencias fundamentales.\n\n";
    }

    var message2 = "\n\n\nY así, en los atardeceres, \ndonde el fuego y el agua se funden, \nse revela la belleza de su unión, \nun recordatorio eterno de su cariño.\n\n"
    var message3 = "\n\n--------------------------------------------\n\nLilia, en el recuento de mis días, no hallo espacio para el arrepentimiento. \nTus manos, tus besos, tus palabras y tu presencia, fueron regalos invaluables, \nesos raros tesoros que muchos vagan por la vida buscando,\n sin nunca encontrarlos. \nHace muy poco he llegado a comprender que \nla nostalgia no equivale a un deseo de regresar. \nExtrañarte es reconocer la dulzura y el valor de lo vivido, \nes aceptar que los capitulos de los libros, aunque bellamente escritos, \nestán destinados a permanecer como memorias, \nno como presentes continuos.\n\n"
    if (distance < 0 ) {
        message = message + imagen1 + message2 + imagen3 + message3+imagen2;
    }
    message = message.replace(/\n/g, "<br>");
    document.getElementById('message').innerHTML = message;
}

function updateBonus(distance) {
    var bonustrack = "";
    if (distance < 0 ) {
        bonustrack = "\n\n--------------------------------------------\n\n BONUS TRACK \n\n--------------------------------------------\n\n Me asombra la tendencia de algunas personas del pasado \na juzgar como si aún fueras el mismo de hace 10 años, \nignorando la inevitabilidad del cambio. \nEsta percepción errónea me recuerda a una frase de Oscar Wilde: \n´Si usted me conoce basado en lo que yo era hace un año, \nusted ya no me conoce. Mi evolución es constante, \npermítame presentarme de nuevo´.\n\nFeliz año nuevo nerita\n\n";
    }
    bonustrack = bonustrack.replace(/\n/g, "<br>");
    document.getElementById('bonustrack').innerHTML = bonustrack;
}
