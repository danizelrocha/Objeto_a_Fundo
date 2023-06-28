//slice = Pega os dados dentro de uma range sem quebrar o arry
//splice = Remove os dados do arry dentro da range.



// mostra a tabela.
/* let arr =[
{ nome: "Daniel", tel:"(13) 99999 9999"},
{ nome: "Fernanda", tel:"(13) 99999 9999"},
{ nome: "Laura", tel:"(13) 99999 9999"},
{ nome: "Manuela", tel:"(13) 99999 9999"},
{ nome: "Tiago", tel:"(13) 99999 9999"},
];
console.table(arr); */



// usando o slice - copia e não mudifica os dados
/* let arr =[
    { nome: "Daniel", tel:"(13) 99999 9999"},
    { nome: "Fernanda", tel:"(13) 99999 9999"},
    { nome: "Laura", tel:"(13) 99999 9999"},
    { nome: "Manuela", tel:"(13) 99999 9999"},
    { nome: "Tiago", tel:"(13) 99999 9999"},
    ];
    
    const newArray = arr.slice(0, 3);

    console.table(arr);
    console.table(newArray);
    console.table(arr); */



// com este slice ele pega só o que foi solicitado
/*  let arr =[
    { nome: "Daniel", tel:"(13) 99999 9999"},
    { nome: "Fernanda", tel:"(13) 99999 9999"},
    { nome: "Laura", tel:"(13) 99999 9999"},
    { nome: "Manuela", tel:"(13) 99999 9999"},
    { nome: "Tiago", tel:"(13) 99999 9999"},
];
        
const newArray = arr.slice(2, 4);
    
console.table(arr);
console.table(newArray);
console.table(arr);
 */


//-------------------------------------


// usando splice remove o item e não replica ele
/* let arr =[
 { nome: "Daniel", tel:"(13) 99999 9999"},
 { nome: "Fernanda", tel:"(13) 99999 9999"},
 { nome: "Laura", tel:"(13) 99999 9999"},
 { nome: "Manuela", tel:"(13) 99999 9999"},
 { nome: "Tiago", tel:"(13) 99999 9999"},
];
            
        
console.table(arr);
arr.splice(0, 3);
console.table(arr);       */ 


// Neste exemplo ele remove um item especifico
/* let arr =[
    { nome: "Daniel", tel:"(13) 99999 9999"},
    { nome: "Fernanda", tel:"(13) 99999 9999"},
    { nome: "Laura", tel:"(13) 99999 9999"},
    { nome: "Manuela", tel:"(13) 99999 9999"},
    { nome: "Tiago", tel:"(13) 99999 9999"},
];
               
console.table(arr);
arr.splice(3, 1);
console.table(arr);  */ 


// Indicando a remoção no console.log
let arr =[
    { nome: "Daniel", tel:"(13) 99999 9999"},
    { nome: "Fernanda", tel:"(13) 99999 9999"},
    { nome: "Laura", tel:"(13) 99999 9999"},
    { nome: "Manuela", tel:"(13) 99999 9999"},
    { nome: "Tiago", tel:"(13) 99999 9999"},
];
               
console.table(arr);
console.log(arr.splice(3, 1));
console.table(arr);  