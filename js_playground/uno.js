var farben = ["rot", "blau", "gelb", "grün"];
var werte = new Array;

for (let i=0;i<=9;i++)
    werte.push(i);
//werte.push("plus2", "richtungswechsel", "aussetzen")

var kombis = new Array;

for (let j=0;j<farben.length;j++)
    {
        for (let k=0;k<werte.length;k++)
            kombis.push(farben[j]+werte[k]);
        document.write("<br>");
    };
//kombis.push("plus4", "farbwunsch");

var player = ["spieler1", "spieler2"];

function pick()
    {
        let ind =  Math.floor(Math.random() * kombis.length);
        return ind;
    };

var handSpieler1 = new Array;
var handSpieler2 = new Array;

for (let i=1;i<=7;i++)
    {
        var ind = pick();
        handSpieler1.push(kombis[ind]);
        kombis.splice(ind,1);
    }