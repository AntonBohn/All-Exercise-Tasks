var speed = -50;
var treibstoff = 200;
var hoehe = 500;
var g = 5;

ausgabe();
setTimeout(eineRunde, 2000);

function eineRunde() {
  var eingegenenerSchub = eingabe();
  zuendung(eingegenenerSchub);
  ausgabe();
  kontrolle();
}

function ausgabe() {
  var info = "Speed: " + speed;
  info += "<br>Fuel: " + treibstoff;
  info += "<br>Höhe: " + hoehe;
  display.innerHTML = info;
  var lunarLander = '\u25ee';
  var meinBild = document.getElementById('meinCanvasElement');
  if (meinBild.getContext) {
    var zeichne = meinBild.getContext('2d');
    zeichne.clearRect(0, 0, meinBild.clientWidth, meinBild.height);
    zeichne.font ='24px arial';
    zeichne.fillText("Marslandung 2117", 10, 30);

    zeichne.strokeStyle = "grey";
    zeichne.lineWidth = 15;
    zeichne.moveTo(0,522);
    zeichne.lineTo(500,522);
    zeichne.stroke();
    zeichne.fillText(lunarLander, meinBild.width/2, 520-hoehe);
  }
}

function eingabe() {
  var schub = parseInt(prompt("Treibstoff", 0));
  schub = Math.abs(schub);
  if (isNaN(schub)) {
    schub = 0;
  }
  if (schub > treibstoff) {
    schub = treibstoff;
  }
  return schub;
}

function zuendung(schub) {
  treibstoff = treibstoff - schub;
  schub = schub - g;
  hoehe = hoehe + speed + schub / 2;
  speed = speed + schub;
}

function kontrolle() {
  if (hoehe > 1) {
    setTimeout(eineRunde, 500);
  } else {
    if (hoehe > -5 && Math.abs(speed) < 10) {
      ausgabe();
      display.innerHTML += "<br>Geschafft!";
    } else {
      ausgabe();
      display.innerHTML += "<br>*Bruchlandung*";
    }
  }
}
