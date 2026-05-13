// script.js
 
// VARIÁVEIS
var slides = ["camera-1.jpg", "camera-2.jpg", "camera-3.jpg"];
var indice = 0;
 
// SLIDES
function nextSlide() {
  indice = indice + 1;
  if (indice >= slides.length) {
    indice = 0;
  }
  document.getElementById("slide").src = slides[indice];
}
 
function prevSlide() {
  indice = indice - 1;
  if (indice < 0) {
    indice = slides.length - 1;
  }
  document.getElementById("slide").src = slides[indice];
}
 
// STRINGS
function resumir() {
  var texto = document.getElementById("texto").value;
  var resumo = texto.substring(0, 20);
  if (texto.length > 20) {
    resumo = resumo + "...";
  }
  document.getElementById("resultado").innerText = "Resumo: " + resumo;
}
 
// LOGIN + VALIDAÇÃO
function login() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
 
  if (user === "admin" && pass === "123") {
    document.getElementById("loginMsg").innerText = "Bem-vindo, " + user;
  } else {
    alert("Erro no login");
    document.getElementById("loginMsg").innerText = "Credenciais inválidas";
  }
}