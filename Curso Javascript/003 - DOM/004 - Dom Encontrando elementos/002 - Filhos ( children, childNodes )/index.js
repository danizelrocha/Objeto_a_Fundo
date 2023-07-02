

const container = document.querySelector(".container");

console.log(container.children); //HTML colection
console.log(container.childNodes); //NODE list - nos espaços do codigo ele retorna como texto

const children = Array.from(container.children); // converte o HTML em um arry de verdade - deixa sem o espaçamento leia linha 6

 console.log(children);

children.forEach((res) => {
    console.log(res);
}); //intera os elementos