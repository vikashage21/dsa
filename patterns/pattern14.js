//     *
//    ***
//   *****
//  *******
// *********

let n = 5;

for (let i = 1; i <= n; i++) {
    let pattern = '';

    for (let s = 1; s <= n - i; s++) {
        pattern += ' '
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += '*'
    }
    console.log(pattern)
}
