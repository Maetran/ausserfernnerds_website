<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>Antwort des Webservers</title>
</head>
<body><p>
<?php
   echo "Nachname: " . $_POST["nn"] . "<br>";
   echo "Vorname: " . $_POST["vn"] . "<br>";
   echo "Bemerkung: " . $_POST["bem"] . "<br>";
   echo "Passwort: " . $_POST["pw"];
?></p>
</body>
</html>