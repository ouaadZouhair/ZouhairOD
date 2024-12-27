<?php 
$host = 'localhost';
$pwd = '';
$dbName = 'my_portfulio';
$userdb = 'root';

$conn = new mysqli($host, $userdb, $pwd, $dbName);

if($conn->connect_error){
    die("Connection failed" . $conn->connect_error);
}