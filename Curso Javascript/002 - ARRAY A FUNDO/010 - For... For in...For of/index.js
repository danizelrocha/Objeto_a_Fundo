// for  ([iniciando]; [condição]; [expressão final])

//----------------- Usando for   ----------------

/* const myArrayObj = [
    {
        nome: "Daniel",
        sobreNome:"Rocha",
    },
    {
        nome: "Laura",
        sobreNome:"Rocha",
    },
    {
        nome: "Manuela",
        sobreNome:"Rocha",
    },
];
for (let i = 0; i < myArrayObj.length; i++) {
    console.log(myArrayObj[i]);
}


const myArray = [1, 2, 3, 4, 5, 6];


for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);// A [] roda e exibe todos os meus nós.
} */



//---------------Usando For of ------------------

/* const myArrayObj = [
    {
        nome: "Daniel",
        sobreNome:"Rocha",
    },
    {
        nome: "Laura",
        sobreNome:"Rocha",
    },
    {
        nome: "Manuela",
        sobreNome:"Rocha",
    },
];

//for of
for(let item of myArrayObj) {
    console.log(item.nome, item.sobreNome);
}

const myArray = [1, 2, 3, 4, 5, 6];

// for of
for (let item of myArray) {
    console.log(item);
} */


//----------------------For in ----------------------------


//obs: trabalhe sempre com o objeto se utilizar o Array de obj => console.log(obj[item]); Vai te retornar os valores e não o nó.

const myArray = [1, 2, 3, 4, 5, 6];



const myArrayObj = [
    {
        nome: "Daniel",
        sobreNome:"Rocha",
    },
    {
        nome: "Laura",
        sobreNome:"Rocha",
    },
    {
        nome: "Manuela",
        sobreNome:"Rocha",
    },
];

/* const obj = { nome: "Daniel", sobreNome: "Rocha" }; // Não replica os nós e sim o nome da propriedade.

for (let item in obj){
    console.log(item);
} */

const obj = { nome: "Daniel", sobreNome: "Rocha" }; // Para acessar os nós temos que usar obj[item].

for (let item in obj){
    console.log(obj[item]);
}