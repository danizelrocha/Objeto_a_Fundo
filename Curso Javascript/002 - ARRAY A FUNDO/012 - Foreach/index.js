//----------------------------Forech-----------------------

const myArrayObj = [
    {
        nome: "Daniel",
        sobreNome: "Rocha",
    },
    {
        nome: "Laura",
        sobreNome: "Rocha",
    },
    {
        nome: "Manuela",
        sobreNome: "Rocha",
    },
    {
        nome: "Fernada",
        sobreNome: "Rocha",
    },
    {
        nome: "Tiago",
        sobreNome: "Rocha",
    },
    {
        nome: "Radyr",
        sobreNome: "Rocha",
    },
];
/* 
// element => calbackFunction ou no lugar de element podemos usar item.
myArrayObj.forEach(element => {
    console.log(element);
});
 */



// element => calbackFunction ou no lugar de element podemos usar item.
// Utilizando index ele retorna a posição de cada objeto
/* myArrayObj.forEach(( index, element) => {
    console.log(index, element);
}); */


// Retornando mensagens
/* myArrayObj.forEach((element, index) => {
    if(element.nome === "Manuela"){
     console.log(" A Manu está esperando o Sushi");   
    }
    console.log(index, element.nome);
}); */


// Retornando mensagens utilizando return forma adequada e retornar .
myArrayObj.forEach((element, index) => {
    if(element.nome === "Manuela"){
      return console.log(" A Manu está esperando o Sushi");   
    }
    console.log(index, element.nome);
});