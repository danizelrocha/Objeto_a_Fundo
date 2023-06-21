//--------------Usando Fucition----------------

function Tenis(tamanho, estoque, preco) {
    return {
        tamanho: tamanho,
        estoque: estoque,
        preco: preco,
    };
}

console.log(Tenis(35, true, "R$ 1.250,68")); 

// ----------OU----------

function Tenis(tamanho, estoque, preco) {
    return {
        tamanho,
        estoque,
        preco,
    };
}

console.log(Tenis(35, true, "R$ 250,68"));
 





//----------------Com Variaveis--------------

const tamanho = 40;
const estoque = true;
const preco = "R$ 2.250,68";

const Tenis2 = {
    tamanho,
    estoque,
    preco,
};

console.log(Tenis2)


//------------------Metodos------------------

const Tenis3 = {
    getTamanho(){
        return 35;
    },
};
console.log(Tenis3.getTamanho());