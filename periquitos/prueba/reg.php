<?php
  require 'db.php';

  $mes = '';

  if(!empty($_POST['email']) && !empty($_POST['contrasena'])) {
    $sss = "INSERT INTO usuarios (email, contrasena) VALUES (:email, :contrasena)";
    $ww = $me->prepare($sss);
    $ww->bindParam(':email', $_POST['email']);
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT);
    $ww->bindParam(':contrasena', $contrasena);

   if ($ww->execute()) {
       $mes = 'Usuario creado satisfactoriamente';

     } else {
       $mes = 'Hubo un error creando tu cuenta';
     }
   }

?>






<!DOCTYPE html>
<html lang="es">
<head>
<title>Regístrate</title>
<meta charset="UTF-8">
<link rel = "stylesheet" href = "estilo.css ">
</head>
<body>
  <div>
    <?php if(!empty($mes)): ?>
        <p> <?= $mes; ?></p>

      <?php endif;
      ?>
<h1>Regístrate</h1>
<form action="reg.php" method="post">
  <input type="text" name="email" placeholder="Ponga su correo aquí"></input>
  <br>
  <input type="password" name="contrasena" placeholder="Ponga su contraseña aquí"></input>
  <br>
  <input type="password" name="contrar" placeholder="Repita su contraseña aquí"></input>
  <input type="submit" name="env" placeholder="Enviar"></input>
</form>
<br>
  o   <a href="log.php">Inicia Sesión</a>
  <a href="index.php">Volver</a>
</div>
</body>
</html>
