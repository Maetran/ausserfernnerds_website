Number.prototype.format = function(stellenzahl, zeichen)
{
    if(!zeichen)
        zeichen="0";
    var formatiert = "" + this;
    while(formatiert.length<stellenzahl)
        formatiert = zeichen + formatiert;
    return formatiert;
}


