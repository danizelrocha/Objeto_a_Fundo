// È uma condição que vai tratar toda a array, verificando se está ok.
// Recurso limitado ao que se pede pois se na lista tiver apenas um ou mais itens que se repetem ele retorna  False, 
// O true vem quando todos os elementos são iguais.

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

const temCha = pedidos.every( (element) => {
    return element.bebida ==="Chá";    
});
console.log(temCha);