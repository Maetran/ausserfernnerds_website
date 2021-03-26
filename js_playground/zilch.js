function bilder(x)                          // provices link to the pictures needed to display
{
    switch(x)
    {
        case 1:
            return "one.png";
        case 2:
            return "two.png";
        case 3:
            return "three.png";
        case 4:
            return "four.png";
        case 5:
            return "five.png";
        case 6:
            return "six.png";
    }
}

function holdUnhold(id)                     // sets classes for dice with given id's to color invert (checked / unchecked); set via stylesheet
{
    if(document.getElementById(id).className != "locked")
    {
        if(document.getElementById(id).className == "hold")
        {
            document.getElementById(id).className = "noHold";
        }
        else
            document.getElementById(id).className = "hold";
    }
}

function resetClassesNoHold()               // resets all dice classes to "noHold" -> unchecking them
{
    var wuerfelIds = ["Eins", "Zwei", "Drei", "Vier", "Fuenf", "Sechs"]
    for(let i=0; i<6; i++)
    {
        document.getElementById(`wuerfel${wuerfelIds[i]}`).className = "noHold";
    }
    document.getElementById("punkteAnzeige").innerHTML = 0;
}

function rollUnholdDice(x)                  // function called by body.onload and eventlistener to reroll all not-checked dice ("noHold")
{
    const holdDice = Array.from(document.getElementsByClassName("hold"));
    var unholdDice = document.getElementsByClassName("noHold");

    if(x==1)                                //call during body onload to give a random first roll
    {
        sessionStorage.setItem("moment", 0);
        for(let i=0; i<unholdDice.length; i++)
        {
            let idNewRolledDice = unholdDice[i].id;
            randomRoll(idNewRolledDice);
        }
    }
    else if(holdDice.length!=0)             // call to check if player locked a dice, no reroll possible if not chosen any dice to hold
    {
        if(parseInt(sessionStorage.getItem("moment"))==parseInt(document.getElementById("punkteAnzeige").innerHTML))
        {
            alert("Du kannst nicht würfeln, noch keine Punkte gehalten");
            return;
        }
    
        sessionStorage.setItem("moment", parseInt(document.getElementById("punkteAnzeige").innerHTML));
        for(let j=0;j<holdDice.length;j++)
        {
            holdDice[j].className = "locked";
        }

        for(let i=0; i<unholdDice.length; i++)
        {
            let idNewRolledDice = unholdDice[i].id;
            randomRoll(idNewRolledDice);
        };

        if(document.getElementsByClassName("locked").length == 6)    // check if player has all dice locked to start a new hand
        {
            for(let l=5;l>=0;l--)
            {
                document.getElementsByClassName("locked")[l].className = "noHold";
            }
            rollUnholdDice(2);                  // call self without deleting the sessionStorage 
        }
    }
    else if(x==2)
    {
        for(let k=0; k<unholdDice.length; k++)
        {
            let idNewRolledDice = unholdDice[k].id;
            randomRoll(idNewRolledDice);
        }
    }
}

function randomRoll(id)                     // rerolls dice with given id and sets new picture ; called by function rollUnholdDice; gives back value for analyzing roll output
{
    var newWuerfel = parseInt(Math.random() * 6 + 1);
    document.getElementById(id).src = bilder(newWuerfel);
    document.getElementById(id).value = newWuerfel;
    return newWuerfel;
}

function analyze()                          // analyzes the latest roll and calculates points
{
    var latestHoldDice = document.getElementsByClassName("hold");
    var summe = 0;
    for(let i=0; i<latestHoldDice.length;i++)
    {
        switch(latestHoldDice[i].value)
        {
            case 1:
                summe += 100;
                break;
            case 5:
                summe += 50;
                break;
        }
    }
    let latestValues = new Array();
    for(let k=0;k<latestHoldDice.length;k++)
    {
        latestValues.push(latestHoldDice[k].value);
    }
    if(latestHoldDice.length>=3 && latestHoldDice.length<=6)
    {
        for(let k=0; k<latestHoldDice.length; k++)
        {
            for(let l=k+1;l<latestHoldDice.length; l++)
            {
                for(let m=l+1;m<latestHoldDice.length; m++)
                {
                    if(latestHoldDice[k].value==latestHoldDice[l].value && latestHoldDice[l].value==latestHoldDice[m].value && latestHoldDice[k].value==latestHoldDice[m].value)
                    {
                        if((latestValues.filter(x => x===latestValues[k]).length) == 3)
                        {
                            switch(latestHoldDice[k].value)
                            {
                                case 1:     // special case: 3x 1 = 300 points, but they need to be subtracted
                                    summe += 700; // regular 1000 pts
                                    break;
                                case 2:
                                    summe += 200;
                                    break;
                                case 3:
                                    summe += 300;
                                    break;
                                case 4:
                                    summe += 400;
                                    break;
                                case 5:     // special case: 3x 5 = 150 points, but they need to be subtracted
                                    summe += 350; // regular 500 pts
                                    break;
                                case 6:
                                    summe += 600;
                                    break;
                            }        
                        }
                        else if((latestValues.filter(x => x===latestValues[k]).length) == 4)
                        {
                            switch(latestHoldDice[k].value)
                            {
                                case 1:     // special case: 3x 1 = 300 points, but they need to be subtracted
                                    summe += 175; // regular 1000 pts
                                    break;
                                case 2:
                                    summe += 50;
                                    break;
                                case 3:
                                    summe += 75;
                                    break;
                                case 4:
                                    summe += 100;
                                    break;
                                case 5:     // special case: 3x 5 = 150 points, but they need to be subtracted
                                    summe += 87.5; // regular 500 pts
                                    break;
                                case 6:
                                    summe += 150;
                                    break;
                            }        
                        }
                        else if((latestValues.filter(x => x===latestValues[k]).length) == 5)
                        {
                            switch(latestHoldDice[k].value)
                            {
                                case 1:     // special case: 3x 1 = 300 points, but they need to be subtracted
                                    summe += 70; // regular 1000 pts
                                    break;
                                case 2:
                                    summe += 20;
                                    break;
                                case 3:
                                    summe += 30;
                                    break;
                                case 4:
                                    summe += 40;
                                    break;                                    
                                case 5:     // special case: 3x 5 = 150 points, but they need to be subtracted
                                    summe += 35; // regular 500 pts
                                    break;
                                case 6:
                                    summe += 60;
                                    break;
                            }        
                        }
                        else if((latestValues.filter(x => x===latestValues[k]).length) == 6)
                        {
                            switch(latestHoldDice[k].value)
                            {
                                case 1:     // special case: 3x 1 = 300 points, but they need to be subtracted
                                    summe += 70; // regular 1000 pts
                                    break;
                                case 2:
                                    summe += 20;
                                    break;
                                case 3:
                                    summe += 30;
                                    break;
                                case 4:
                                    summe += 40;
                                    break;
                                case 5:     // special case: 3x 5 = 150 points, but they need to be subtracted
                                    summe += 35; // regular 500 pts
                                    break;
                                case 6:
                                    summe += 60;
                                    break;
    
                            }        
                        }

                    }
                }
            }
        }
    }

    if(latestHoldDice.length == 6)          // check if player rolled 6 different = street = 2000points
    {
        let contr = 1
        for(let i=1;i<7;i++)
        {
            if(!latestValues.includes(i))
            {
                contr = 0;
            }
        }
        if(contr==1)
        {
            summe += 1850;
        }
    }

    document.getElementById("punkteAnzeige").innerHTML = summe + parseInt(sessionStorage.getItem("moment"));
}

function bankPoints()                       // check if enough points to bank or have to go on
{
    let momPoints = parseInt(document.getElementById("punkteAnzeige").innerHTML);
    if(momPoints == parseInt(sessionStorage.getItem("moment")))
    {
        alert("Du kannst nach einem Wurf ohne Punkte nicht mehr schreiben");
        return;
    }
    sessionStorage.setItem("total", momPoints);
    if(momPoints<400)
    {
        alert("Zu wenig Punkte zum schreiben, mindestens 400 benötigt");
    }
    else
    {
        var totalPoints = document.getElementById("punkteTotal").innerHTML;
        var newPoints = document.getElementById("punkteAnzeige").innerHTML;
        totalPoints = parseInt(totalPoints);
        newPoints = parseInt(newPoints);
        totalPoints += newPoints;
        sessionStorage.setItem("total", totalPoints);
        document.getElementById("punkteTotal").innerHTML = totalPoints;
        document.getElementById("punkteAnzeige").innerHTML = 0;
        sessionStorage.setItem("moment", 0);
        resetClassesNoHold();               // release all dice & ...
        rollUnholdDice(1);                  //  ...reroll to avoid banking again and again
    }
    if(sessionStorage.getItem("total") >= 10000)
    {
        alert("Du hast gewonnen -> Mehr als 10000 Pkte");
        sessionStorage.setItem("total", 0);
        document.getElementById("punkteTotal").innerHTML = 0;
    }
}

function zilch()                            // give up the try and reroll all, reset points of last roll
{
    document.getElementById("punkteAnzeige").innerHTML = 0;
    sessionStorage.setItem("moment", 0);
    resetClassesNoHold();
    rollUnholdDice(1);
}