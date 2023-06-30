// SOME PERGUNTA SE APENAS  UM DOS VALORES DA ARRAY EQUIVALE A SUA CONDIÇÃO 

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

const existeAlimento = pedidos.some( (element) => {
    return element.alimento ==="Sushi";    
});
console.log(existeAlimento);