 <?php
session_start();
  require 'db.php';
  if (isset($_SESSION['usuario_id'])) {
    $co = $me->prepare('SELECT id, email, contrasena FROM usuarios WHERE id = :id');
    $co->bindParam(':id', $_SESSION['usuario_id']);
    $co->execute();
    $re = $co->fetch(PDO::FETCH_ASSOC);

    $usuario = null;

    if (count($re) > 0) {
      $usuario = $re;
    };
  };
?>
<!DOCTYPE html>
<html lang="es">
<head>
<title>Hogar</title>
<meta charset="UTF-8">
<link rel = "stylesheet" href = "estilo.css ">
</head>
<body>
  <div>
          <h1>Bienvenido</h1>
          <a href="log.php">Inicia Sesión</a>  o  <a href="reg.php">Regístrate</a> o
          <a class="ex" href="close.php">Salir</a>



</div>
</body>
</html>
