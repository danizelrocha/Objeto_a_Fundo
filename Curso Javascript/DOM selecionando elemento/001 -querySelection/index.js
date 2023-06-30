"use script";
// Primeira parte
const body = document.querySelector("body");
body.style.background = "rgb(207, 207, 184)";

const h1 = document.querySelector("h1"); // acessamdo por TAG HTML
h1.style.background = "rgb(18, 208, 47)";
h1.style.textAlign = "center";

const classP = document.querySelector(".paragrafo"); //Aqui "paragrfo" é o pai e "stroge" é o filho "child" sempre dar um espaço entre eles
const idP = document.querySelector("#paragrafo");

console.log(h1);
console.log(classP);
console.log(idP);

let timer = 0;
const title = document.querySelector("title");

setInterval(() =>{
    title.innerText = timer;
    timer++;
}, 1000);

