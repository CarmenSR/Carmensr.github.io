document.getElementById("t1").style.display = "none"
document.getElementById("w").style.display = "none"
document.getElementById("e").style.display = "none"
document.getElementById("b").style.display = "none"
document.getElementById("pa").style.display = "none"
document.getElementById("pb").style.display = "none"
document.getElementById("pc").style.display = "none"
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
  document.getElementById("qb").innerHTML = "Que bonito nombre es " + e
}
