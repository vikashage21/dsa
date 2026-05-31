let n = 5;
let row = n
for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let j = 1; j <= row; j++) {
        pattern += '*'

    }
    row--

    console.log(pattern)
}

// pattern

// *****
// ****
// ***
// **
// *