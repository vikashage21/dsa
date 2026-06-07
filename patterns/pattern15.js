// *********
//  *******
//   *****
//    ***
//     *

// pattern 

let n = 4;
for (let i = 1; i <= n; i++) {
    let pattern = ''
    for (let s = 1; s <= i - 1; s++) {
        pattern += '_'
    }
    for (let j = 1; j <= 2 * (n - i) + 1; j++) {
        pattern += '*'
    }


    console.log(pattern)

}