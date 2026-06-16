
// row wise sum of a matrix
let arr = [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9, 10]]

let sum = [];
for (let i = 0; i <= arr.length - 1; i++) {
    let total = 0;
    for (let j = 0; j <= arr[i].length - 1; j++) {
        total += arr[i][j]
    }
    sum.push(total)
}
console.log(sum)