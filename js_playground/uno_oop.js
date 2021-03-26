

class Game
{
    constructor(){}
    players()
    {
        var val = 1;
        var nrPlayer;
        do
        {
            let spieler = prompt("Anzahl Spieler?");
            try
            {
                if (spieler == null)
                    throw "Sie haben Abgebrochen";
                else if (isNaN(spieler))
                    throw "Keine Zahl eingegeben";
                else if (spieler<2)
                    throw "Zu wenige Spieler";
                else if (spieler>7)
                    throw "Zu viele Spieler";
                else
                    nrPlayer = parseInt(spieler);
                    val=0;
                    return nrPlayer;
            }
            catch(e)
            {
                alert(e);
            }
        }
        while (val==1);
    }

    nameArray(a)
    {
        this.nameArray = a;
    }

    createStartDeck()
    {
        var farben = ["rot", "blau", "gelb", "grün"];
        var werte = new Array;
        for (let i=0;i<=9;i++)
            werte.push(i);
        //TODO: werte.push("plus2", "richtungswechsel", "aussetzen")
        var kombis = new Array;
        for (let j=0;j<farben.length;j++)
        {
            for (let k=0;k<werte.length;k++)
                kombis.push(farben[j]+werte[k]);
        }
        return kombis;
    }
}

class Player extends Game
{
    constructor()
    {
        super();
    }

    names(namePlayer, indexNr) //needed to create instances of each player
    {
        this.namePlayer = namePlayer;
        this.index = indexNr;
    }

    toString()
    {
        return "Name " + (this.index + 1) + ": " +this.namePlayer + "<br>";
    }
}

///***Game Starts here */

//Create instance of Game
var mainGame = new Game();
//Define Nr of Players
var spielerAnzahl = mainGame.players();
//Aks for names and initialize as new subclass Player.names()
var nameArray = [];
for(let i=0;i<spielerAnzahl;i++)
    {
        let tempName = new Player();
        tempName.names(prompt("Name Spieler" + (i+1) + ": "), i);
        nameArray.push(tempName);
    }
for(let j=0;j<nameArray.length;j++)
    console.log(nameArray[j]);
mainGame.nameArray(nameArray);
//Create Startdeck
var startDeck = mainGame.createStartDeck();
console.log(startDeck);