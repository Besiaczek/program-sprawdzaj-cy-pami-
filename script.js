/*POCZĄTEK*/
const wraper = document.getElementById("wraper");
const restart = document.getElementById("restart");
wraper.style.display = "none";
restart.style.display = "none";


/*PO NACIŚNIĘCIU START*/
const buttonStart = document.getElementById("start-button");
const textStart = document.getElementById("text-start");

function start() {
    buttonStart.style.display = "none";
    textStart.style.display = "none";
    wraper.style.display = "block";
    timer();
    losowanieKolejnosciKulek();
}
buttonStart.addEventListener("click", start);


/*GENEROWANIE KULEK W LOSOWEJ KOLEJNOŚCI*/
const tablicaWygenerowanychKulek = [];

function losowanieKolejnosciKulek() {
    const losowanieNrKulki = Math.floor(Math.random() * 50 + 1);

    for (let i = 0; i < tablicaWygenerowanychKulek.length; i++) {
        if (tablicaWygenerowanychKulek[i] == losowanieNrKulki) {
            return losowanieKolejnosciKulek();
        }
    }

    const nowaKulka = document.createElement("div");

    nowaKulka.setAttribute("class", "kulka");
    nowaKulka.setAttribute("id", losowanieNrKulki);
    nowaKulka.textContent = losowanieNrKulki;
    wraper.appendChild(nowaKulka);

    tablicaWygenerowanychKulek.push(losowanieNrKulki);

    if (tablicaWygenerowanychKulek.length < 50) {
        losowanieKolejnosciKulek();
    }


    /*PO KLIKNIĘCIU NA KULKI*/
    var iloscKliknietychKulek = 1;
    var kulkaKlikniecie = document.getElementById(iloscKliknietychKulek);


    function end() {
        if (iloscKliknietychKulek == 51) return theEnd();
        kulkaKlikniecie.addEventListener("click", function klikniecieKulki() {
            kulkaKlikniecie.style.visibility = "hidden";
            iloscKliknietychKulek = iloscKliknietychKulek + 1;
            kulkaKlikniecie = document.getElementById(iloscKliknietychKulek);
            end();
        });
    }
    end();
}


/*PO WYGRANEJ*/
function theEnd() {
    const tekstEnd = document.createElement("p");
    tekstEnd.setAttribute("class", "text-end");
    tekstEnd.textContent = "KONIEC";
    document.body.appendChild(tekstEnd);
    restart.style.display = "block";
    clearTimeout(t);
}


/*RESTART*/
const restartFunction = function () {
    restart.addEventListener("click", location.reload());
    return;
}

restart.addEventListener("click", restartFunction);


/*TIMER*/
var h1 = document.getElementsByTagName('h1')[0],
    miliseconds = 0,
    seconds = 0,
    minutes = 0,
    t;

function add() {
    miliseconds++;
    if (miliseconds >= 10) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }

    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (miliseconds > 9 ? miliseconds : "" + miliseconds);

    timer();
}

function timer() {
    t = setTimeout(add, 100);
}
