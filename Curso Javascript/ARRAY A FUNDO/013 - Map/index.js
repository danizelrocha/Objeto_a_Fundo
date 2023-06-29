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
        bebida: "Suco da Uva"
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

// O metodo Map alem de interar todo o Array ele é muito bom
// para editar o interado ( resumindo o Array)



// chama todos os elementos e index 
/* pedido.map((element, index) => {
    console.log(index, element);
}); */


// Trocando elementos evalidando pedido.
pedido.map((element, index) => {
    if(element.id === 29 && element.alimento === "Sushi"){
        return (element.alimento = "Sanduiche Natural");
    }
    console.log(pedidos);
});