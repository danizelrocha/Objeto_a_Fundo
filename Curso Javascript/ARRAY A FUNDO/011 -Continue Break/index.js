//Continue Break

const myArrayObj = [
    {
        nome: "Daniel",
        sobreNome: "Rocha",
    },
    {
        nome: "Laura",
        sobreNome: "Rocha",
    },
    {
        nome: "Manuela",
        sobreNome: "Rocha",
    },
    {
        nome: "Fernada",
        sobreNome: "Rocha",
    },
    {
        nome: "Tiago",
        sobreNome: "Rocha",
    },
    {
        nome: "Radyr",
        sobreNome: "Rocha",
    },
];

// Resposta objetiva 
/* for (let item of myArrayObj) {
    if (item.nome === "Laura"){
        console.log("  A Laurinha está te esperando.");
    }
    console.log(item);
}
 */

// Resposta objetiva e continua rodando a aplicação => Continue
for (let item of myArrayObj) {
    if (item.nome === "Laura") {
        console.log(" A Laurinha está te esperando.");
        continue;
    }

    // Resposta objetiva apenas o que foi pedido => Break
    if (item.nome === "Manuela") {
        console.log(" Tenho que dar Sushi para a Manu.");
        break;
    }
    console.log(item);
}