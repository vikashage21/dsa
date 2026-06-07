
let n = 5
for (let i = 1; i <= n; i++) {
    let pattern = ''
    // row
    for (let s = 1; s <= n - i; s++) {
        pattern += ' '
    }
    for (let j = 1; j <= i; j++) {
        pattern += '*'

    }
    console.log(pattern)
}