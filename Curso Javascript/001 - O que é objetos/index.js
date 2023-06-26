let Tenis = {
    tipo: "Tenis de Corrida",
    cadarco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 35,
            largura: 40,
            prfundidade: 10,

        },
    },
    marcaArrayValores: ["Nike", "Adidas", "Reebock", "Olimpicos"],
    marcaArrayObj: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "Reebock",
        },
        {
            nome: "Olimpicos",
        },
    ],
    getMarcaArrayValores: function (param) {
        return this.marcaArrayObj[param];
    },
    getMarcaArrayObj: function (param) {
        return this.marcaArrayObj[param].nome;
    },
};
console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);