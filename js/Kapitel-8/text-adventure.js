function findeAuswahl(gesuchteId) {
  for (var i = 0; i < geschichte.situationen.length; i++) {
    if (geschichte.situationen[i].id == gesuchteId) {
      return geschichte.situationen[i].auswahlText;
    }
  }
}

function eineSituation(gesucht) {
  for (var j = 0; j < geschichte.situationen.length; j++) {
    if (geschichte.situationen[j].id == gesucht) {
      var text = geschichte.situationen[j].text + "<br><br>";
      anzahlElemente = geschichte.situationen[j].ziele.length;
      for (var i = 0; i < anzahlElemente; i++) {
        var geheZu = geschichte.situationen[j].ziele[i];
        var geheZuText = findeAuswahl(geheZu);
        text =
          text +
          '<div onclick="eineSituation(' +
          geheZu +
          ');"' +
          ">&gt; " +
          geheZuText +
          "</div>";
      }
      break;
    }
  }
  monitor.innerHTML = "<br>&gt;" + text + "<br>";
}

eineSituation(0);