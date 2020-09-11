
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
document.getElementById("ma").style.display = "none"
document.getElementById("me").style.display = "none"
document.getElementById("mi").style.display = "none"
document.getElementById("wa").style.display = "none"
document.getElementById("we").style.display = "none"
document.getElementById("wi").style.display = "none"
document.getElementById("cm").style.display = "none";
document.getElementById("zz").style.display = "none";
document.getElementById("jj").style.display = "none";


function but1() {
document.getElementById("bnv").innerHTML = "Genial! Ahora elige tu periquito"
document.getElementById("buta").style.display = "none"
document.getElementById("butb").style.display = "none"
document.getElementById("pa").style.display = "block"
document.getElementById("pb").style.display = "block"
document.getElementById("pc").style.display = "block"

};
function but2 () {
  document.getElementById("bnv").innerHTML = "Bueno, vuelve cuando ya quieras adoptar alguno"
  document.getElementById("buta").style.display = "none"
  document.getElementById("butb").style.display = "none"
  document.getElementById("yasi").style.display = "block"
};

function el1 () {
  document.getElementById("w").style.display = "block"
  document.getElementById("pb").style.display = "none"
  document.getElementById("pc").style.display = "none"
  document.getElementById("bnv").style.display = "none"
  document.getElementById("e").style.display = "block"
  document.getElementById("b").style.display = "block"



};
function el2 () {
  document.getElementById("w").style.display = "block"
  document.getElementById("pa").style.display = "none"
  document.getElementById("pc").style.display = "none"
  document.getElementById("bnv").style.display = "none"
  document.getElementById("e").style.display = "block"
  document.getElementById("b").style.display = "block"



};
function el3 () {
  document.getElementById("w").style.display = "block"
  document.getElementById("pa").style.display = "none"
  document.getElementById("pb").style.display = "none"
  document.getElementById("bnv").style.display = "none"
  document.getElementById("e").style.display = "block"
  document.getElementById("b").style.display = "block"



};
function butn() {
  var e = document.getElementById("e").value;
  var qb = document.getElementById("qb");
  document.getElementById("yt").style.display = "block";
  document.getElementById("qb").innerHTML = "Que bonito nombre es " + e;
  document.getElementById("nombre").innerHTML = document.getElementById("e").value;
  if (e == ""){
    document.getElementById("qb").innerHTML = "¡Vamos! Dale un nombre bonito"
    document.getElementById("yt").style.display = "none";
  }

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
document.getElementById("ma").style.display = "block";
document.getElementById("me").style.display = "block";
document.getElementById("mi").style.display = "block";
document.getElementById("wa").style.display = "block";
document.getElementById("we").style.display = "block";
document.getElementById("wi").style.display = "block";
document.getElementById("qb").innerHTML = "Arriba tienes las barras de estatus de tu periquito, mantenlas lo mejor que puedas"
};


function oki() {
  document.getElementById("qb").style.display = "none";

  document.getElementById("ok").style.display = "none";
  queesesto();
  elpo();
document.getElementById("ma").onclick = function () { i+=40};
  let pro=document.querySelector("#pro");
              let i=100;
              let y=0;
              let id=setInterval(function(){
               i-=20;
                  if(i>=0){
                      pro.value=i;
                  }
                  else{
                      pra.value=y;
                  }
              },7500);
              document.getElementById("ma").onclick = function () { i+=40; document.getElementById("zz").style.display = "block";};

              setInterval (function() {
                 document.getElementById("zz").style.display = "none";
             },9000)
};
function queesesto() {
  document.getElementById("mi").onclick = function () { i+=40};
  let pra=document.querySelector("#pra");
              let i=100;
              let y=0;
              let id=setInterval(function(){
               i-=20;
                  if(i>=0){
                      pra.value=i;
                  }
                  else{
                      pra.value=y;
                  }
              },1000);
              document.getElementById("mi").onclick = function () { i+=40; document.getElementById("jj").style.display = "block";};

              setInterval (function() {
                 document.getElementById("jj").style.display = "none";
              },5000)
};

function elpo() {
  let pre=document.querySelector("#pre");
              var i=100;
              let y=0;
              let id=setInterval(function(){
               i-=20;
                  if(i>=0){
                  pre.value=i}
                    else {
                      pre.value=y;

                  }

              },10000);


  document.getElementById("me").onclick = function () { i+=40; document.getElementById("cm").style.display = "block";};

  setInterval (function() {
     document.getElementById("cm").style.display = "none";
 },10000)
 };

function ys(){
  but1()
  document.getElementById("yasi").style.display = "none"
};
