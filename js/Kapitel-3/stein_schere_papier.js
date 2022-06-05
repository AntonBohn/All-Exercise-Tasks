
var symbolComputer,
  symbolSpieler,
  anzahlRunden = 0,
  gewinneComputer = 0,
  gewinneSpieler = 0,
  gewinnBedingung = 3;

do {
  ausgedachteZahl = Math.random() * 3;
  ausgedachteZahl = Math.round(ausgedachteZahl + 0.5);

  if (ausgedachteZahl == 1) {
    symbolComputer = "Schere";
  }
  if (ausgedachteZahl == 2) {
    symbolComputer = "Stein";
  }
  if (ausgedachteZahl == 3) {
    symbolComputer = "Papier";
  }

  wahlSpieler = prompt(
    "Gib deine Wahl ein",
    "Schere ist 1, Stein ist 2, Papier ist 3"
  );

  if (wahlSpieler == 1) {
    symbolSpieler = "Schere";
  }
  if (wahlSpieler == 2) {
    symbolSpieler = "Stein";
  }
  if (wahlSpieler == 3) {
    symbolSpieler = "Papier";
  }
  if (symbolComputer == symbolSpieler) {
    alert("Unentschieden!");
  }

  if (symbolComputer == "Schere" && symbolSpieler == "Stein") {
    gewinneSpieler++;
    alert("Du gewinnst gegen Schere");
  }
  if (symbolComputer == "Schere" && symbolSpieler == "Papier") {
    gewinneComputer++;
    alert("Computer gewinnt mit Schere");
  }
  if (symbolComputer == "Stein" && symbolSpieler == "Schere") {
    gewinneComputer++;
    alert("Computer gewinnst mit Stein");
  }
  if (symbolComputer == "Stein" && symbolSpieler == "Papier") {
    gewinneSpieler++;
    alert("Du gewinnst gegen Stein");
  }
  if (symbolComputer == "Papier" && symbolSpieler == "Stein") {
    gewinneComputer++;
    alert("Compueter gewinnst mit Papier");
  }
  if (symbolComputer == "Papier" && symbolSpieler == "Schere") {
    gewinneSpieler++;
    alert("Du gewinnst gegen Papier");
  }
  anzahlRunden++;
} while (gewinneSpieler < 3 && gewinneComputer < 3);

if (gewinneSpieler >= 3) {
  alert("Du hast das Spiel Gewonnen!");
} else {
  alert("Der Computer war besser und hat das Spiel Gewonnen!");
}
alert("Es wurden " + anzahlRunden + " Runden gespielt!");
alert("Der endstand ist " + gewinneSpieler + " zu " + gewinneComputer);

var untereGrenze = 0;
var ueberDerGrenze = 0;


// test der Formel
for (var i = 0; i < 1000000; i++) {
  zufallsZahl = Math.round((Math.random() * 100)+ 0.5);

  if (zufallsZahl < 1) {
    untereGrenze++;
  }

  if (zufallsZahl > 100) {
    ueberDerGrenze++;
  }
}

console.log(
  "Zu klein : " + untereGrenze + " zu gross: " + ueberDerGrenze
);