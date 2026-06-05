// [2, 3, 4, 5, 3], target = 3

let arr = [2, 3, 4, 5, 3]
let target = 5
function linearSearch(arr, target) {
    let found = false
    for (let i = 0; i < arr.length; i++) {
        if (target == arr[i]) {
            found = true
            return i
        }
    }
    if (!found) {
        return -1
    }
}

const ans = linearSearch(arr, target)
console.log(ans)