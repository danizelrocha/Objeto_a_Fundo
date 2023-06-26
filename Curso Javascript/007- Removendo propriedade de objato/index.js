let Tenis = {
    tamanho:45,
    estoque: true,
};

//Deletando dados usando palavra reservada "delete"
delete Tenis.estoque;

console.log(Tenis);

// Reinserindo dados

Tenis.estoque = true;

console.log(Tenis);