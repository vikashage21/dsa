// matrix addition 

let matrixA = [
    [5, 6, 1, 3],
    [4, 2, 9, 2],
    [9, 5, 7, 4]
]

let matrixB = [
    [2, 7, 1, 3],
    [9, 8, 9, 2],
    [1, 5, 5, 4]
]

let row = 3;
let col = 3;

// loop will start from here

for (let i = 0; i <= row; i++) {
    let sum = 0;
    for (let j = 0; j < col; j++) {
        sum += matrixA[j][i] + matrixB[j][i]
    }
    console.log(sum)
}