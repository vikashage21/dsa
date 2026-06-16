// column wise sum of matrix
let arr = [[3, 6, 9], [1, 7, 8], [2, 5, 4]]

let row = arr.length;
let col = arr.length;

for (let i = 0; i < col; i++) {
    let sum = 0;
    for (let j = 0; j < row; j++) {
        sum += arr[j][i]
    }
    console.log(sum)
}