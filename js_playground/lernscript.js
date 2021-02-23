var zc = [28.3, 16.5, 23.6, 16.7, 31];
document.write("Feld: " + zc + "<br><br>");

document.write("Ausführen mit forEach():<br>");
function ausgabe(element, index)
  {document.write(index + ":" + element + " " + "<br>");}

zc.forEach(ausgabe);
document.write("<br><br>");

document.write("Untersuchen mit Funktion: <br>");
function uber(wert)
  {return wert > this;}
document.write("Mindestens ein Wert über 30: " 
  + zc.some(uber, 30) + "<br>");
document.write("Jeder Wert über 16: "
  + zc.every(uber, 16) + "<br><br>");

document.write("Filtern mit Funktion: <br>");
var zd = zc.filter(uber, 20)
document.write("Neues Feld mit Werten über 20: " + zd + "<br><br>");

document.write("Anwenden auf Funktion:<br>");

function vielfach(wert)
  {return wert * this;}
var ze = zc.map(vielfach, 4);
document.write("Neues Feld mit Werten * 4: " + ze + "<br>");