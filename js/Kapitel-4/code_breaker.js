function codeBreaker() {
  var zahl1 = Math.round(Math.random() * 9 + 0.5);
  var zahl2 = Math.round(Math.random() * 9 + 0.5);
  var zahl3 = Math.round(Math.random() * 9 + 0.5);
  var meinZaehler = 0;

  do {
    var meinVersuch = prompt("Gib einen Tipp ab", "Zahl von 111 bis 999");
    var richtigeStelle = 0;
    var richtigeZahl = 0;
    var tipp1 = meinVersuch.charAt(0);
    var tipp2 = meinVersuch.charAt(1);
    var tipp3 = meinVersuch.charAt(2);

    if (tipp1 == zahl1) {
      richtigeStelle++;
    } else if (tipp1 == zahl2 || tipp1 == zahl3) {
      richtigeZahl++;
    }
    if (tipp2 == zahl2) {
      richtigeStelle++;
    } else if (tipp2 == zahl1 || tipp2 == zahl3) {
      richtigeZahl++;
    }
    if (tipp3 == zahl3) {
      richtigeStelle++;
    } else if (tipp3 == zahl2 || tipp3 == zahl1) {
      richtigeZahl++;
    }

    if (meinVersuch > 999) {
      alert("Darf maximal 3 Ziffern haben!!!");
    }

    meinZaehler++;

    alert(
      meinZaehler +
        ".Runde: " +
        richtigeStelle +
        " Zahlen an der richtigen Stelle, " +
        richtigeZahl +
        " Zahlen kommen im Code vor"
    );

    var nichtAufgegeben = meinVersuch >= 111 && meinVersuch <= 999;
    console.log(meinVersuch + ": " + tipp1 + "-" + tipp2 + "-" + tipp3);
  } while (richtigeStelle < 3 && nichtAufgegeben);

  alert("Die Lösung war " + zahl1 + " " + zahl2 + " " + zahl3);

  if (richtigeStelle == 3 && meinZaehler < 12) {
    alert("Du hast Gewonnen!!!");
  } else {
    alert("Du hast es nicht geschafft!\nDer mysteriöse Mr. JS hat gewonnen");
  }
}
