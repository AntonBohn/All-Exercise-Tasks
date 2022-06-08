var fragen = new Array();
var runden = 0;
var punkte = 0;
var richtigeAntwort;
var gesperrt = true;

definiereDieFragen();

function definiereDieFragen() {
  fragen[0] = "Wie wurde Twix früher genannt?#1) Unix 2) Raider 3) Nockerl#2";
  fragen[1] = "Wie viele Tage hat der Dezember?#1) 31 2) 42 3) 30#1";
  fragen[2] =
    "Wie nennt man einen männlichen Hund?#1) Räude 2) Rüde 3) Rhodedendron#2";
  fragen[3] =
    "Wie hoch ist die Geschwindigkeit g auf der Erde?#1) 9,0081 2) 91,08 3) 9,81#3";
  fragen[4] = "Wie hoch ist der Eiffelturm?#1) 324 2) 290 3) 254#1";
  fragen[5] =
    "Wann war dei Schlacht bei Issos?#1) 333 v.Chr. 2) 333 n.Chr. 3) 973 v.Chr.#1";
  fragen[6] =
    "Wie heißt der Hund aus der Serie Lessie?#1) Pluto 2) Nemo 3) Lessie#3";
  fragen[7] = "Wie hoch ist der Mount Everest?#1) 880 m 2) 8.849 m 3) 7642 m#2";
  fragen[8] =
    "Wer war oder ist Hammurabi?#1) Ein Herrscher 2) Ein Gebirge 3) Eine Handymarke#1";
  fragen[9] =
    "Wie oft wird der Oscar verliehen?#1) Alle 2 Jahre 2) Jährlich 3) Alle 3 Jahre#2";

  for (var i = 1; i < 9; i++) {
    fragen.sort(function (a, b) {
      return Math.random() - 0.5;
    });
  }
}

function tippeButton(gewaehlterKnopf) {
  if (gesperrt == true) {
    return;
  }
  gesperrt = true;
  gewaehlterKnopf.style.boxShadow = "10px 10px 20px grey inset";
  if (gewaehlterKnopf.getAttribute("id") == richtigeAntwort) {
    punkte++;
  } else {
    gewaehlterKnopf.style.background = "#ff0000";
  }
}

function starteNeueRunde() {
  document.getElementById("1").style.boxShadow = "15px 15px 15px grey";
  document.getElementById("1").style.background = "white";
  document.getElementById("2").style.boxShadow = "15px 15px 15px grey";
  document.getElementById("2").style.background = "white";
  document.getElementById("3").style.boxShadow = "15px 15px 15px grey";
  document.getElementById("3").style.background = "white";
  if (runden < 5) {
    gesperrt = false;
    runden++;
    dieFrage = fragen.shift();
    var frageAufbereitet = dieFrage.split("#");
    document.getElementById("Frage").innerHTML = frageAufbereitet[0];
    document.getElementById("Antworten").innerHTML = frageAufbereitet[1];
    richtigeAntwort = frageAufbereitet[2];
    setTimeout(starteNeueRunde, 3000);
  } else {
    alert("Das Spiel ist zu Ende. Du hast " + punkte + " Punkte geholt.");
  }
}
