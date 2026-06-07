
let n = 5
for (let i = 1; i <= n; i++) {

    let pattern = '';
    for (let s = 1; s <= n - i; s++) {
        pattern += ' '
    }
    for (let j = i; j >= 1; j--) {

        pattern += j
    }
    console.log(pattern)
}

//pattern

//     1
//    21
//   321
//  4321
// 54321