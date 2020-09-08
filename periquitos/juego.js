


document.getElementById("t1").style.display = "none"
document.getElementById("w").style.display = "none"
document.getElementById("e").style.display = "none"
document.getElementById("b").style.display = "none"
document.getElementById("pa").style.display = "none"
document.getElementById("pb").style.display = "none"
document.getElementById("pc").style.display = "none"
document.getElementById("yt").style.display = "none"
document.getElementById("ok").style.display = "none"
document.getElementById("pro").style.display = "none"
document.getElementById("pre").style.display = "none"
document.getElementById("pra").style.display = "none"
document.getElementById("yasi").style.display = "none"



function but1() {
document.getElementById("bnv").innerHTML = "Genial! Ahora elige tu periquito"
document.getElementById("buta").style.display = "none"
document.getElementById("butb").style.display = "none"
document.getElementById("t1").style.display = "block"

};
function but2 () {
  document.getElementById("bnv").innerHTML = "Bueno, vuelve cuando ya quieras adoptar alguno"
  document.getElementById("buta").style.display = "none"
  document.getElementById("butb").style.display = "none"
  document.getElementById("yasi").style.display = "block"
};

function el1 () {
  document.getElementById("w").style.display = "block"
  document.getElementById("t1").style.display = "none"
  document.getElementById("bnv").style.display = "none"
  document.getElementById("e").style.display = "block"
  document.getElementById("b").style.display = "block"
  document.getElementById("pb").style.display = "block"


};
function el2 () {
  document.getElementById("w").style.display = "block"
  document.getElementById("t1").style.display = "none"
  document.getElementById("bnv").style.display = "none"
  document.getElementById("e").style.display = "block"
  document.getElementById("b").style.display = "block"
  document.getElementById("pa").style.display = "block"


};
function el3 () {
  document.getElementById("w").style.display = "block"
  document.getElementById("t1").style.display = "none"
  document.getElementById("bnv").style.display = "none"
  document.getElementById("e").style.display = "block"
  document.getElementById("b").style.display = "block"
  document.getElementById("pc").style.display = "block"


};
function butn() {
  var e = document.getElementById("e").value;
  var qb = document.getElementById("qb");
  document.getElementById("yt").style.display = "block";
  document.getElementById("qb").innerHTML = "Que bonito nombre es " + e
};
function tank() {
document.getElementById("yt").style.display = "none"
document.getElementById("e").style.display = "none"
document.getElementById("w").style.display = "none"
document.getElementById("b").style.display = "none"
document.getElementById("ok").style.display = "block"
document.getElementById("pro").style.display = "block"
document.getElementById("pre").style.display = "block"
document.getElementById("pra").style.display = "block"
document.getElementById("qb").innerHTML = "Arriba tienes las barras de estatus de tu periquito, mantenlas lo mejor que puedas"
};
///function anime (){
  ///document.getElementById("pro").classList.toggle ("final");

function oki() {
  document.getElementById("qb").style.display = "none"
  document.getElementById("ok").style.display = "none"
  ///anime()
}

