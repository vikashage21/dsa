// find the max number in giving Array


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

let arr = [4,8,6,9 ,45]

console.log(findMax(arr))