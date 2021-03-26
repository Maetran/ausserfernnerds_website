<?php
    header("Content-type: text/html; charset=utf-8");

    if($_GET["pnr"] == 6714)
    {
        if($_GET["umfang"] == "alle")
            echo "6714, Maier, Hans, 3500. Euro, geb. 15.03.1962";
        else
            echo "6714, Maier, Hans";
    }
    else if($_GET["pnr"] == 81343)
    {
        if($_GET["umfang"] == "alle")
            echo "81343, Schmitz, Peter, 3750.00 Euro, geb. 12.04.1958";
        else
            echo "81343, Schmitz, Peter";
    }
?>