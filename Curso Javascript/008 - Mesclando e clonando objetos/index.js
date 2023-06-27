// CLONANADO OBJTOS RASOS- forma correta

/* let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: { a: "a", b: { c: "c" } } };

let clone1 = Tenis;
console.log(clone1);

let mesclar1 = Object.assign(Tenis, link);
console.log(mesclar1);

let mesclar2 = {...Tenis, ...link };
console.log(mesclar2); */


// CLONANADO OBJTOS RASOS - forma incorreta - desta forma a referancia do tenis ainda esta no clone mexendo na referencia ele muda
// Quando você mexer no mesclar1 muda todo o conceito obcerve a linha 36, ele troca toda a rsposta dos objetos menos a do clone1
let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: { a: "a", b: { c: "c" } } };

let clone1 = Tenis;
let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = {...Tenis, ...link };

console.log(clone1);

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(mesclar1);
console.log(mesclar2);
console.log(Tenis);