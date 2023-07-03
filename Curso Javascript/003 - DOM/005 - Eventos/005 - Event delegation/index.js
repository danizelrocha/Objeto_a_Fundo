// Errado de se fazer ruim para manutenção e consumo de memória

/* const home = document.querySelector(".home");
home.addEventListener("click", () => {
    console.log("Home");
});

const sobre = document.querySelector(".sobre");
sobre.addEventListener("click", () => {
    console.log("Sobre");
});

const contato = document.querySelector(".contato");
contato.addEventListener("click", () => {
    console.log("Contato");
}); */


//--------------------------------------------------------


// Como deve ser feito, melhorando a performance e manutenção

//Utilizando o target

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
    const { target } = event;
    const body = document.querySelector('body')

    switch (target.getAttribute("class")) {
        case "home":
            body.style.background = "red"
            break;

        case "sobre":
            body.style.background = "blue"
            break;

        case "contato":
            body.style.background = "pink"
            break;
    }

});