/* const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.table(arr);
console.log(arr[2][0]);// [2] é a eixo "X" e o [0] é o eixo "Y" */




const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
    ],
];

console.table(arr);
console.log(arr[3][2][1]);// [3] é a eixo "X" e o [2] é o eixo "X" e o [1] é o eixo "y" Aqui passamo por todo primeiro arry para entrar no segundo