<?php

  session_start();

  require 'db.php';

  if(!empty($_POST['email']) && !empty($_POST['contrasena'])) {
    $co = $me->prepare("SELECT id, email, contrasena FROM usuarios WHERE email = :email");
    $co->bindParam(":email", $_POST["email"]);
    $co->execute();
    $re = $co->fetch(PDO::FETCH_ASSOC);

    $men = "";

    if (count($re) > 0 && password_verify($_POST['contrasena'], $re['contrasena'])) {
      $_SESSION["usuario_id"] = $re["id"];
      header("Location: /php-login");
  } else {
    $men = "Tu correo o tu contraseña no coinciden, inténtalo de nuevo";
  }
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
<title>Iniciar Sesión</title>
<meta charset="UTF-8">
<link rel = "stylesheet" href = "estilo.css ">
</head>
<body>
  <div>
    <?php if(!empty($men)): ?>
        <p> <?= $men ?></p>
      <?php endif; ?>
<h1>Iniciar Sesión</h1>
  <form action="log.php" method="post">
    <input type="text" name="email" placeholder="Ponga su correo aquí"></input>
    <br>
    <input type="password" name="contrasena" placeholder="Ponga su contraseña aquí"></input>

  <input type="submit" name="env" placeholder="Enviar"></input>
</form>
<br>
  o   <a href="reg.php">Regístrate</a>
  <a href="index.php">Volver</a>
  </div>
</div>
</body>
</html>
