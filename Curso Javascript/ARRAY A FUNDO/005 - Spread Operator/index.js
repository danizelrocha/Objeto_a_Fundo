
// Com o Spred Operator você pega de um array só o elemnto desejado 
//utilizando os três pontos  ... e identificando com o verbo o que vc precisa.

// vem em forma de array.
/* const num = [1, 2, 3, 4, 5];
console.log(num); */



// retira o array e tras o conjunto de numeros.
/* const num = [1, 2, 3, 4, 5];
console.log(...num) */


// Tras o maior valor mas com muita demanda de linhas de código,
// não é viavel para grandes aplicações
/*  const num = [1, 2, 3, 4, 5];
console.log(...num);
console.log(Math.max(1, 2, 3, 4, 5)); */



// metodo inviavel
/* const num = [1, 2, 3, 4, 5];
console.log(...num);
console.log(Math.max(num[1], num[2], num[3], num[4], num[5])); */


// Desta forma ele tras o que se pede com o metodo  - Math.max - tras o maior numero 
const num = [1, 2, 3, 4, 5];  
console.log(...num);
console.log(Math.max(...num));