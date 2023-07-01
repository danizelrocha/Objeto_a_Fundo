const pedidos = [
    {
        id: 420,
        nome: "Daniel",
        alimento: "X Bacon",
        bebida: "Suco da Laranja"
    },
    {
        id: 4152,
        nome: "Laura",
        alimento: "Sanduiche Natural",
        bebida: "Chá"
    },
    {
        id: 29,
        nome: "Manuela",
        alimento: "Sushi",
        bebida: "Suco da Morango"
    },
    {
        id: 33,
        nome: "Fernada",
        alimento: "X Salada",
        bebida: "Chá"
    },
    {
        id: 55,
        nome: "Tiago",
        alimento: "Pizza Portuguesa",
        bebida: "Coca-cola de 2 Litros"
    },
];

const filterCha = pedidos.filter((element, index) => {
        return element.bebida === "Chá";
    });

console.log(1, pedidos);// pega todos os elementos
console.log(2, filterCha);// pega o que foi  pedido