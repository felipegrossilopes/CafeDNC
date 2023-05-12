// Obtém o elemento do botão "Abrir modal" e o modal
var btn = document.getElementById("openModal");
var modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close1")[0];

// Quando o usuário clicar no botão "Abrir modal", o modal é exibido
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão "Fechar", o modal é ocultado
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele é ocultado
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
