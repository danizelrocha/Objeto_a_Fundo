"use strict";


// bloquei o acesso ao site 
const link = document.querySelector("a");

// removendo o event vc consegue acessar ao site. retirando a linha 8 a 10
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Evento prevenido");
});


// com o uso do alert de outras aulas consegui encrementar essa
link.onclick = function alertOne() {
  alert("Não é possivel acessar ao site no momento.");
};