var g = 9.81,
  v0,
  derWinkel,
  wurfweite,
  i;

var entfernungZumMonster = Math.random() * 90 + 10;

entfernungZumMonster = Math.round(entfernungZumMonster);

alert(entfernungZumMonster);

for (i = 1; i <= 3; i++) {
  v0 = prompt("Gib die Anfangsgeschwindigkeit ein", "v0");

  derWinkel = prompt("Gib den Wurfwinkel ein", "zwischen 1 und 90");

  derWinkel = derWinkel * (Math.PI / 180);

  wurfweite = (v0 * v0 * Math.sin(2 * derWinkel)) / g;

  wurfweite = Math.round(wurfweite);

  alert(wurfweite);

  if (wurfweite == entfernungZumMonster) {
    alert("Du hast das Monster Getroffen!");
  } else {
    alert("Du hast das Monster verfehlt!");
  }
}
