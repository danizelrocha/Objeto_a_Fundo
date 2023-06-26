const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Adidas"}, { nome: "Nike"}],
    secret: 123456,
    n: 5,
    link: { a:"a é igual A", b: { c:"c é igual C"} },
};

//const { tamanho, estoque, marcas,} = Tenis;
//console.log(tamanho, estoque, marcas);

/* const {secret: randomNumber, n: avaliacoes } = Tenis;
//console.log(secret);
console.log(randomNumber);
console.log(avaliacoes); */



//  Para charma a
/* const {
    link: { a } ,
} =Tenis;

console.log(a); */


// Para chamar c

/* const {
    link: { 
        b: { c },
    } ,
} =Tenis;

console.log(c); */

// Para chamar "A" e "C"

const {
    link: { 
        a,
        b: { c },
    } ,
} =Tenis;

console.log(a,c);