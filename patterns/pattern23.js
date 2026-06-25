// upper pattern 
let n = 5;
let x = 0
for (let i = 1; i <= n; i++) {
    // printing the space
    let pattern = ''
    for (let j = 1; j <= i; j++) {
        pattern += ' '
    }
    for (let k = 1; k <= n - x; k++) {
        pattern += '*'
    }
    x++
    console.log(pattern)
}

// pattern ing the lower pattern



for (let i = 1; i <= n; i++) {
    let pattern = ''
    for (let j = 1; j <= n - i; j++) {
        pattern += ' '
    }
    for (let k = 1; k <= i; k++) {
        pattern += '*'
    }
    console.log(pattern)
}