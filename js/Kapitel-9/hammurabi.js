var jahr = 0;
var korn = 6000;
var buerger = 100;
var land = 400;
var ende = false;
var landPreis = 5;
var ernteProAcker = 0;

function spieleEineRunde() {
  if (ende == false) {
    jahr = jahr + 1;
    bestimmeErnteErfolg();
    verarbeiteBefehle();
    bestimmeLandPreis();
    erstelleBericht();
    pruefeEnde();
  }
}

function bestimmeLandPreis() {
  landPreis = Math.round(Math.random() * 10 + 0.5);
  if (Math.random() > 0.9) {
    landPreis = Math.round(Math.random() * 15 + 0.5);
  }
}

function bestimmeErnteErfolg() {
  ernteProAcker = Math.round(Math.random() * 5 + Math.random() * 5 + 0.5);
}

function verarbeiteBefehle() {
  var eingabe = prompt(
    "Erteilt Eure Befehle, hohre Herrscher",
    "Nahrung,Aussaat,Landhandel"
  );
  var befehle = eingabe.split(",");
  var verteileKorn = parseInt(befehle[0]);
  var saeeKorn = parseInt(befehle[1]);
  var landKauf = parseInt(befehle[2]);
  if (isNaN(verteileKorn) || verteileKorn < 0) {
    verteileKorn = 0;
  }
  if (isNaN(saeeKorn) || saeeKorn < 0) {
    saeeKorn = 0;
  }
  if (isNaN(landKauf) || landKauf < 0) {
    landKauf = 0;
  }
  bevoelkerung(verteileKorn);
  aussaat(saeeKorn);
  handel(landKauf);
}

function bevoelkerung(nahrung) {
  if (nahrung > korn) {
    nahrung = korn;
  }
  korn = korn - nahrung;
  var ausreichenNahrung = Math.round(nahrung / 20) - buerger;
  var neueBuerger = 0;
  if (ausreichenNahrung > 0) {
    neueBuerger = ausreichenNahrung / 2;
  }
  var verstorbeneBuerger = 0;
  if (ausreichenNahrung < 0) {
    verstorbeneBuerger = -ausreichenNahrung;
  }
  buerger = Math.round(buerger + neueBuerger - verstorbeneBuerger);
}

function aussaat(saat) {
  if (saat > korn) {
    saat = korn;
  }
  korn = korn - saat;
  var moeglicheSaat = saat / 2;
  if (moeglicheSaat > buerger * 10) {
    moeglicheSaat = buerger * 10;
  }
  if (moeglicheSaat > land) {
    moeglicheSaat = land;
  }
  geerntetesKorn = ernteProAcker * moeglicheSaat;
  korn = korn + geerntetesKorn;
}

function handel(kauf) {
  var verkauf = 0;
  if (kauf < 0) {
    verkauf = Math.abs(kauf);
  }
  if (verkauf > land) {
    alert("Nicht genug Land!");
    return;
  }
  land = land - verkauf;
  korn = korn + verkauf * landPreis;
  if (kauf > 0) {
    alert("Nicht genug Korn für Landkauf!");
    return;
  }
  land = land - kauf * landPreis;
}

function erstelleBericht() {
  var ernte;
  switch (ernteProAcker) {
    case 1:
      ernte = "Unwetter vernichteten Teile der Ernte.";
      break;
    case 2:
    case 3:
      ernte = "Das Wetter war schlecht. Die Ernte ist gering.";
      break;

    case 6:
    case 7:
      ernte = "Das Wetter war gut. Die Ernte war reichlich.";
      break;

    case 8:
    case 9:
    case 10:
      ernte = "Das Wetter war sehr gut. Die Ernte war hervorragend.";
      break;
    case 4:
    case 5:
    default:
      ernte = "Das Wetter war normal.";
      break;
  }
  var info = "Weiser Herrscher Hammurabi<br>";
  info += "Wir schreiben das Jahr " + jahr + " Eurer Herrschaft.<br><br>";
  info += buerger + " treue Bürger zählt Euer Reich.<br>";
  info +=
    ernte + "<br>" + korn + " Scheffel Korn lagern in den Kornkammern.<br>";
  info += land + " Acker Land besitzt Ihr.<br>";
  info += landPreis + " Scheffel Korn kostet ein Acker Land.";

  monitor.innerHTML = info;
  return;
}

function pruefeEnde() {
  var abbruchGrund = "<br>";
  if (buerger < 1) {
    ende = true;
    abbruchGrund += "Ihr habt zu wenig Untertanen.";
  }
  if (korn < 1) {
    ende = true;
    abbruchGrund += "Eure Kornkammer ist leer.";
  }
  if (land < 1) {
    ende = true;
    abbruchGrund += "Ihr habt zu wenig Land.";
  }

  if (jahr > 20 && ende == false) {
    ende = true;
    abbruchGrund =
      "Nach 20 Jahren ist das Ende Eurer Zeit als Herrscher gekommen.<br>Euer Name soll auf ewig gepriesen werden! Ihr habt weise und gerect regiert.";
  }
  if (ende) {
    abbruchGrund = "<br><br>Eure Herrschaft ist beendet." + abbruchGrund;
    monitor.innerHTML = monitor.innerHTML + abbruchGrund;
  }
}

erstelleBericht();
