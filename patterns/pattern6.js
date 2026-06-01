
let n = 5
let row = n;
for (let i = 0; i <= n; i++) {
    // row 
    let pattern = ''
    let num = 1

    for (let j = row; j>= 1; j--) {
        pattern += num
        num++
    }
    console.log(pattern)
    row--
}

// pattern 

// 12345
// 1234
// 123
// 12
// 1