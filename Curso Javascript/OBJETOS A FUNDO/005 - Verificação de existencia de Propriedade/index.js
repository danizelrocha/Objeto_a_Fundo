/* const Tenis = {
    //tamanho: 45,
    estoque: true,
    marcas: [{nome: "Adidas"}, { nome: "Nike"}],
    secret: 123456,
    n: 5,
    link: { a:"a é igual A", b: { c:"c é igual C"} },
};


//hasOwnProperty | propertyName in Tenis

// validação: com hasOwsProperty
if (Tenis.hasOwnProperty("tamanho")) {
    console.log("Existe tamanho");
} else {
    console.log("Não exite tamanho");
} */



//---------------Outra forma -----------------


const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Adidas"}, { nome: "Nike"}],
    secret: 123456,
    n: 5,
    link: { a:"a é igual A", b: { c:"c é igual C"} },
};


//hasOwnProperty | propertyName in Tenis

// validação: com hasOwsProperty --existe.
/* console.log(Tenis.hasOwnProperty("tamanho"));
console.log("tamanho" in Tenis); */


// validação: com hasOwsProperty -- não existe.Foi trocado no segundo console.log e subistitudo por "teste"
//console.log(Tenis.hasOwnProperty("tamanho"));
console.log("teste" in Tenis);

