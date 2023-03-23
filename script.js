window.onload = function () {
    //Executa um JS imediatamente após o carregamento da página
    var seconds = 00;
    var tens = 00;

    var appendTens = window.document.getElementById('tens');
    var appendSeconds = window.document.getElementById('seconds');

    var buttonstart = window.document.getElementById('button-start');
    var buttonstop = window.document.getElementById('button-stop');
    var buttonreset = window.document.getElementById('button-reset');

    var Interval;

    buttonstart.onclick = function () {
        clearInterval(Interval); //O método ClearInterval() limpa o temporizador definido no método setInterval().
    }

    Interval = setInterval(startTimer, 10); // O método setInterval () chama uma função em um intervalo especificado (milessegundos).


buttonstop.onclick = function () {
    clearInterval(Interval);
};

buttonreset.onclick = function () {
    clearInterval(Interval);

    tens = "00";
    seconds = "00";

    appendTens.innerHTML = tens
    appendSeconds.innerHTML = seconds;
};

function startTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens
    }
    if (tens > 9) {
        appendTens.innerHTML = tens
    }

    if (tens > 99) {
        console.log('seconds');
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }
}
}