document.getElementById("notiz").innerHTML =
  "Die Ergebnisse von Bubblesort ist:<br>";
var mannschaft = ["Xaver", "Hans", "Darth Berti", "Helge", "Bärbel", "Andrea"];
sortiere(mannschaft);
function sortiere(liste, position, geaendert) {
  var kurzMerken = null;
  var geaendert = false;
  if (position == undefined) {
    position = 0;
  }
  if (geaendert == undefined) {
    geaendert = false;
  }
  for (var i = 0; i < liste.length - 1; i++) {
    if (liste[i] > liste[i + 1]) {
      kurzMerken = liste[i];
      liste[i] = liste[i + 1];
      liste[i + 1] = kurzMerken;
      geaendert = true;
      notiz.innerHTML = notiz.innerHTML + "<br>" + liste;
      setTimeout(sortiere, 1000, liste);
      return;
    }
  }
  if (geaendert == true) {
    setTimeout(sortiere, 1000, 0, false);
  }
}
