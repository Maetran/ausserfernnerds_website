Date.prototype.dateFormat = function(formatzeichen)
{
    var wtag = new Array("Sonntag", "Montag", "Dienstag",
        "Mittwoch", "Donnerstag", "Freitag", "Samstag");
    var mon = new Array("Januar", "Februar", "März", "April");
    var aus = "";

    for (let i=0; i<formatzeichen.length; i++)
        switch(formatzeichen.charAt(i))
        {
            case "w": aus += wtag[this.getDay()];               break;
            case "d": aus += this.getDate().format(2);          break;
            case "M": aus += mon[this.getMonth()].slice(0,3);   break;
            case "y": aus += this.getFullYear();                break;
            case "h": aus += this.getHours().format(2);         break;
            case "m": aus += this.getMinutes().format(2);       break;
            case "s": aus += this.getSeconds().format(2);       break;
            case "i": aus += this.getMilliseconds();            break;
            default:  aus += formatzeichen.charAt(i);
        }
    return aus;
}

Date.prototype.dateAdd = function(jahr, monat, tag, stunde, minute, sekunde)
{
    var zeit = new Date(2000, 0, 1, 0, 0, 0);
    zeit.setFullYear(this.getFullYear() + jahr);
    zeit.setMonth(this.getMonth() + monat);
    zeit.setDate(this.getDate() + tag);
    zeit.setHour(this.getHours() + stunde);
    zeit.setMinutes(this.getMinutes() + minute);
    zeit.setSeconds(this.getSeconds() + sekunde);
    return zeit;
}