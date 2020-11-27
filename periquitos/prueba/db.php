<?php
$server = 'localhost';
$usuario = 'root';
$contrasena = '';
$database = 'sesión';

try {
 $me = new PDO("mysql:host=$server;dbname=$database;", $usuario, $contrasena);
}catch (PDOException $e) {
  die('Conección fallida: ' . $e->getMessage());
}
 ?>
