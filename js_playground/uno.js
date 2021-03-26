//***start seting the whole deck
// var farben = ["rot", "blau", "gelb", "grün"];
// var werte = new Array;
// for (let i=0;i<=9;i++)
//     werte.push(i);
//TODO: werte.push("plus2", "richtungswechsel", "aussetzen")

// var kombis = new Array;

// for (let j=0;j<farben.length;j++)
//     {
//         for (let k=0;k<werte.length;k++)
//             kombis.push(farben[j]+werte[k]);
//     };
//TODO: kombis.push("plus4", "farbwunsch"); // Sonderkarten

//***finished setting the whole deck */
//---
//***Count Players */

// var val = 1;
// var nrPlayer;
// do
// {
//     let spieler = prompt("Anzahl Spieler?");
//     try
//     {
//         if (spieler == null)
//             throw "Sie haben Abgebrochen";
//         else if (isNaN(spieler))
//             throw "Keine Zahl eingegeben";
//         else if (spieler<2)
//             throw "Zu wenige Spieler";
//         else if (spieler>7)
//             throw "Zu viele Spieler";
//         else
//             nrPlayer = parseInt(spieler);
//             val=0;
//     }
//     catch(e)
//     {
//         alert(e);
//     }
// }
// while (val==1);

//***Finished counting players with error catching */
//---
//***Players Names -> To Array */

// var player = new Array;
// for(let i=0;i<nrPlayer;i++)
//     player.push(prompt("Name Spieler"));
// const namesFixed = player

//*** Finished picking Players Names*/
//---
//***First Handout of 7 cards */

for (let j=0;j<player.length;j++) // iterate player
{
    player[j] = [];
    for (let i=1;i<=7;i++) // iterate cards per player - first hand
    {   
        var firstSeven = new Array();
        var ind = function(){Math.floor(Math.random() * kombis.length);};
        firstSeven.push(kombis[ind]);
        kombis.splice(ind,1);
    };
    player[j].push(firstSeven.toString);
};
console.log(kombis);
console.log(player[1]);



//***Finished first Handout */