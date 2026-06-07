//     * 
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

let n = 5;


// upper triangle

for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let s = 1; s <= n - i; s++) {
        pattern += ' '
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        pattern += '*'
    }
    console.log(pattern)
}

// lower triangle

for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let s = 1; s <= i - 1; s++) {
        pattern += ' '
    }
    for (let j = 1; j <= 2 * (n - i) + 1; j++) {
        pattern += '*'
    }
    console.log(pattern)
}