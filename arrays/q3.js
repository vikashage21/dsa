// sum of array elements

let arr = [1, 4, 5, 6, 7, 8];

function findSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

const ans = findSum(arr)

console.log(ans)