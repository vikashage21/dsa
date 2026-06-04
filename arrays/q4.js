let arr = [1, 2, 3, 4, 5, 7, 8]


// function findMissing(arr) {
//     let ms = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (ms == arr[i]) {
//             ms++
//         } else {
//             return ms;
//         }
//     }

// }

// const ans = findMissing(arr)
// console.log(ans)



// other way to solve this problem is 

function findMissing(arr) {
    for (let i = 1; i < arr.length; i++) {
        let found = false;
        // this for number
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) {
                found = true;
                break;
            }

        }
        if (!found) {
            return i
        }
    }
}

const ans = findMissing(arr)
console.log(ans)