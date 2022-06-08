var aktuellesErgebnis;
var richtigeAntwort;
var punkte = 0;
var runden = 0;
var level = 1;

if (runden == 0) {
  holeSpielStand();
}

function stelleFrage() {
  document.getElementById("eingabe").style.background = "white";
  document.getElementById("eingabe").value = "";
  runden++;

  if (punkte > level * 5) {
    level++;
  }

  var ausgabe;
  var ersteZahl = Math.round(Math.random() * level * 5 + 0.5);
  var zweiteZahl = Math.round(Math.random() * level * 5 + 0.5);
  var operation = Math.round(Math.random() * 2 + 0.5);

  switch (operation) {
    case 1:
      ausgabe = ersteZahl + " + " + zweiteZahl;
      aktuellesErgebnis = ersteZahl + zweiteZahl;
      break;
    case 2:
      if (zweiteZahl > ersteZahl) {
        var zwischenSpeicher = ersteZahl;
        ersteZahl = zweiteZahl;
        zweiteZahl = zwischenSpeicher;
      }
      ausgabe = ersteZahl + " - " + zweiteZahl;
      aktuellesErgebnis = ersteZahl - zweiteZahl;
      break;
    default:
      alert("Keine Übereinstimmung!");
  }

  document.getElementById("Frage").innerHTML = ausgabe;
  document.getElementById("Antworten").innerHTML =
    "Level " + level + " Punkte " + punkte + " Runden " + runden;
  speicherSpielStand();
}

function pruefeEingabe() {
  if (
    document.getElementById("eingabe").value == "Löschen" ||
    document.getElementById("eingabe").value == "Start"
  ) {
    localStorage.clear();
    punkte = 0;
    runden = 0;
    level = 1;
    return;
  }
  var aktuelleEingabe = document.getElementById("eingabe").value;

  if (aktuelleEingabe == aktuellesErgebnis) {
    document.getElementById("eingabe").style.background = "green";
    punkte++;
  } else {
    document.getElementById("eingabe").style.background = "red";
  }

  setTimeout(stelleFrage, 1000);
  return false;
}

function speicherSpielStand() {
  localStorage.setItem("punkte", punkte);
  localStorage.setItem("runden", runden);
  localStorage.setItem("level", level);
}

function holeSpielStand() {
  if (localStorage.getItem("runden") != null) {
    punkte = parseInt(localStorage.getItem("punkte"));
    runden = parseInt(localStorage.getItem("runden"));
    level = parseInt(localStorage.getItem("level"));
  }
}
