/* const stringArray = ["A", "B", "C", "D","E", "F", "G", "H", "I"];
// Pega
console.log(stringArray.sort());
// Reverte
console.log(stringArray.reverse()); */



// Com números

//const numberArry = [10, 20, 30, 1, 200, 17, 14, 11, 45, 3];



//Busca de forma que a primeira dezena vale como prerrogativa
//:ex => 1, 10 11, 14, 17, 20, 200, 3, 30, 45
//console.log(numberArry.sort());

//Busca de forma que a primeira dezena vale como prerrogativa reversa
//:ex => 45, 30, 3, 200, 20, 17, 14, 11, 10, 1
//console.log(numberArry.reverse());

//  Sort ordenando com a ferramenta certe utilize um aero function
/* console.log(numberArry.sort((a, b) => a - b)); */


//  reverse ordenando com a ferramenta certe utilize um aero function
//console.log(numberArry.sort((a, b) => b - a));
// ou
//console.log(numberArry.sort((a, b) => a - b).reverse());


/**
 * sort((a, b) => a - b)
 * se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
 * se retornar 0, a ordenação de "a" e "b" não mudará.
 * se retornar um valor positivo, o valor em "b" será ordenado antes de "a".
 **/


const objArray = [
  {
    nome: "Manuela Adriano da Rocha",
  },
  {
    nome: "Daniel Alves da Rocha",
  },
  {
    nome: "Laura Adriano da Rocha",
  },
  {
    nome: "Fernada Adriano da Rocha",
  },
  {
    nome: "Tiago Alves da Rocha",
  },
  {
    nome: "Cleitinho Rodrigo Bismarque",
  },

];

console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a,b) => b.nome.localeCompare(a.nome)));
console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)).reverse());
