<?php
$username = "alex";
$password = "aaa123123";
$hostname = "localhost";
$db = "test";

//connection to the database
$dbhandle = mysqli_connect($hostname, $username, $password, $db)
or die("Unable to connect to MySQL");
echo "Connected to MySQL<br>";