// H2 antes do paragrafo
/* const container = document.querySelector(".container");
const paragrafo= document.querySelector(".paragrafo");

const newH2 = document.createElement("h2")
newH2.innerText = "Novo H2";

container.insertBefore(newH2, paragrafo);  */



// h2 antes do h1
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");

const newH2 = document.createElement("h2")
newH2.innerText = "Novo H2";

container.insertBefore(newH2, h1);