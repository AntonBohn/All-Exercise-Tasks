var ausgedachteZahl,
  obereGrenze = 100,
  gerateneZahl,
  anzahlDerVersuche = 0;

ausgedachteZahl = Math.random() * obereGrenze;
ausgedachteZahl = Math.round(ausgedachteZahl + 0.5);
do {
  gerateneZahl = prompt("Rate bitte", "Eine Zahl bis " + obereGrenze);
  if (gerateneZahl > obereGrenze || gerateneZahl <= 0) {
    alert("Deine Zahl muss zwischen 1 und 100 liegen!!!");
  }
  if (gerateneZahl > ausgedachteZahl) {
    alert("Deine Zahl ist zu groß!");
  } else {
    alert("Deine Zahl ist zu klein!");
  }
  anzahlDerVersuche++;
} while (gerateneZahl != ausgedachteZahl);

alert("Richtig Geraten!!!");
alert("Du hast " + anzahlDerVersuche + " Mal Geraten!");
