//////Lo que mostrará al inicio
  function inicio() {
      document.getElementById("ima").style.display = "none"
      document.getElementById("uno").style.display = "none"
      document.getElementById("dos").style.display = "none"
      document.getElementById("tres").style.display = "none"
      document.getElementById("cuatro").style.display = "none"
      document.getElementById("cinco").style.display = "none"
      document.getElementById("seis").style.display = "none"
      document.getElementById("c").style.display = "none"
      document.getElementById("d").style.display = "none"
      document.getElementById("f").style.display = "none"
      document.getElementById("p").style.display = "block"
      document.getElementById("ya").style.display = "block"
      document.getElementById("rules").style.display = "none"
  }
  inicio()

  //////Para el botón reglas
function a(){
  document.getElementById("ya").style.display = "none"
  document.getElementById("rules").style.display = "block"
  document.getElementById("c").style.display = "block"
  document.getElementById("p").style.display = "none"
  document.getElementById("ima").style.display = "none"
  document.getElementById("z").innerHTML = "Reglas"
  document.getElementById("x").innerHTML = "1) Cada jugador tirará del dado y avanzará el número de casillas que corresponda."
  document.getElementById("v").innerHTML = "2) Si caes en una casilla con queso que sube, sube por la escalera a la otra casilla conectada."
  document.getElementById("m").innerHTML = "3) Si caes en una casilla con una salsa que baja, tienes que bajar por la salsa a la otra casilla conectada."
  document.getElementById("n").innerHTML = "4) Si sacas 6 avanzas y puedes volver a tirar los dados, pero si sacas tres 6 seguidos vas a la casilla de inicio y no puedes salir hasta que vuelvas a sacar un 6."
}

/////Para el botón jugar
function b(){
  document.getElementById("ya").style.display = "none"
  document.getElementById("p").style.display = "none"
  document.getElementById("ima").style.display = "block"
  document.getElementById("c").style.display = "block"
  document.getElementById("f").style.display = "block"
  document.getElementById("d").style.display = "block"
  document.getElementById("dados").style.display = "block"

  }
////Para el botón volver
function c() {
  inicio()
}
//////Aquí las bases para animar
function animar() {
  var pos = 0;
  var box = document.getElementById("f");
  var te = setInterval(mover,10);
  function mover() {
    if (pos>=150) {
      cleanInterval(te);
    }else{
      pos+=1;
      box.style.left=pos+"px"
    }
  }

}
////////Numero aleatorio
function tirar() {
var num=Math.round(Math.random()*5)
if (num==0) {
  num+=1
};
function uno() {
  document.getElementById("uno").style.display = "none"
}
function dos() {
  document.getElementById("dos").style.display = "none"
}
function tres() {
  document.getElementById("tres").style.display = "none"
}
function cuatro() {
  document.getElementById("cuatro").style.display = "none"
}
function cinco() {
  document.getElementById("cinco").style.display = "none"
}
function seis() {
  document.getElementById("seis").style.display = "none"
}
switch (num) {
  case 1:
   document.getElementById("uno").style.display = "block";
   console.log(num)
   setInterval(uno,20000)
    break;
  case 2:
   document.getElementById("dos").style.display = "block";
   console.log(num)
   setInterval(dos,20000)
    break;
   case 3:
   document.getElementById("tres").style.display = "block";
   console.log(num)
   setInterval(tres,20000)
    break;
   case 4:
   document.getElementById("cuatro").style.display = "block";
   console.log(num)
  setInterval(cuatro,20000)
      break;
   case 5:
   document.getElementById("cinco").style.display = "block";
   console.log(num)
   setInterval(cinco,20000)
   break;
   case 6:
   document.getElementById("seis").style.display = "block";
   console.log(num)
   setInterval(seis,20000)
     break;
  default:
  document.write("Ha habido un error");
  console.log(num)
     break;
}if (num==0) {
document.getElementById("uno").style.display = "none"
document.getElementById("dos").style.display = "none"
document.getElementById("tres").style.display = "none"
document.getElementById("cuatro").style.display = "none"
document.getElementById("cinco").style.display = "none"
document.getElementById("seis").style.display = "none"
}
}
