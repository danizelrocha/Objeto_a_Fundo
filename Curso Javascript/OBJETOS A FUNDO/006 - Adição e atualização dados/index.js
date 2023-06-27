let Tenis = {
    tamanho: 45,
    estoque: true,
};
Tenis.tamanho = 42;
Tenis.estoque = false;
//Tenis.preco = "R$1.250,68";
Tenis["preco"] = "R$1.250,68";

console.log(Tenis);
console.log(Tenis["preco"]);
