function boton(){
  var nombre = document.getElementById("name").value;
  var come = document.getElementById("pp").value;

  var p = document.getElementById("post");
  post.innerHTML = post.innerHTML + "<br>";
  post.innerHTML = post.innerHTML + nombre + ": " + come;
}
