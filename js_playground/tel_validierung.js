do
{
    var tel = prompt("Bitte Telefonnummer eingeben");
    var faulesEi = 0
    if (tel == null)
        {
            alert("Sie haben abgebrochen");
            break;
        }
    if (tel.startsWith("+"))
        {
            tel = tel.replace("+","");
        };
    if (tel.includes(" "))
        {
            tel = tel.replaceAll(" ", "");
        };
    if (tel.startsWith("0041"))
        {
            tel = tel.replace("0041", "");
        };
    if (tel.startsWith("41") && tel.length==11)
        {
            tel = tel.replace("41", "");
        };
    for (let i = 0; i<tel.length; i++)
        if (isNaN(tel[i]))
            {
                faulesEi = 1;
            };
    if (faulesEi == 1)
            {
                alert("Buchstaben & Sonderzeichen sind nicht erlaubt");
            };
}
while (faulesEi == 1);

if (tel != null)
    {
        document.write("Telefonnummer: " + tel);
    }
else
    {
        document.write("Es wurde abgebrochen");   
    }