

//Pai do Strong é o Paragrafo

const strong = document.querySelector("strong");

console.log(strong.parentElement);//retorna fala que é um documento: true
console.log(strong.parentNode);//retorna falando que  naõ é documento: false

console.log(document.documentElement.parentNode === document);// Aqui é a referencia se é um documento
console.log(document.documentElement.parentElement === document); // Aqui é a referencia de que não é um documento.


//Pai do Paragrafo é a DIV

const p = document.querySelector(".paragrafo");

console.log(p.parentElement);//retorna fala que é um documento: true
console.log(p.parentNode);//retorna falando que  naõ é documento: false


// Pai da div é o BODY

const container = document.querySelector(".container");

console.log(container.parentElement);//retorna fala que é um documento: true
console.log(container.parentNode);//retorna falando que  naõ é documento: false


// Pai da div é o HTML

const body = document.querySelector("body");

console.log(body.parentElement);//retorna fala que é um documento: true
console.log(body.parentNode);//retorna falando que  naõ é documento: false
