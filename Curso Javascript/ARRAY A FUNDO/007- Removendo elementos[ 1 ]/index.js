/* Shift = remove o primeiro elemento de um arry e retorna esse  elemento]
pop = remove o ultimo elemnto de um array e retorna este elemento
*/


// Nesnte exmplo oa tabela retorna mostrando as posições iniciais
// e mostrando a posição atual do elemento 1 que foi trocado
// poisição inicial o 1 é o zero com shift a posição zero fira o dois 

/* let arr = [1, 2, 3, 4, 5,];
console.table(arr);
arr.shift();
console.table(arr); */


// Aqui ele retira troca e mostra o elemnto estraido no caso o numero 1

/*  let arr = [1, 2, 3, 4, 5,];
console.table(arr);
console.log(arr.shift());
console.table(arr);  */




let arr = [1, 2, 3, 4, 5,];
console.table(arr);
console.log("shift =>", arr.shift());
console.log("pop =>", arr.pop());
console.table(arr); 