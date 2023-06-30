
// A idéia é pegar todos os valores da array e condensa-lo em um só
const pedidos = [
    {
        id: 420,
        nome: "Daniel",
        alimento: "X Bacon",
        bebida: "Suco da Laranja",
        preco: 52,
    },
    {
        id: 4152,
        nome: "Laura",
        alimento: "Sanduiche Natural",
        bebida: "Chá",
        preco: 32,
    },
    {
        id: 29,
        nome: "Manuela",
        alimento: "Sushi",
        bebida: "Suco da Morango",
        preco: 48,
    },
    {
        id: 33,
        nome: "Fernada",
        alimento: "X Salada",
        bebida: "Chá",
        preco: 36,
    },
    {
        id: 55,
        nome: "Tiago",
        alimento: "Pizza Portuguesa",
        bebida: "Coca-cola de 2 Litros",
        preco: 98,
    },
];

const balancete = pedidos.reduce( (total, element) => {
    return total + element.preco ;    
}, 0);// O zero aqui representa o ponto de partida da soma do total. Já que precissa iniciar com um valor que não sabemos 
console.log(balancete);