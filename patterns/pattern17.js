let n = 4
// upper pattern


for (let i = 1; i <= n; i++) {
    let pattern = ''
    for (let j = 1; j <= i; j++) {
        pattern += '*'

    }
    console.log(pattern)
}


// lower pattern


for (let i = 1; i <= n; i++) {
    let pattern = ''
    for (let j = n - i; j >= 1; j--) {
        pattern += '*'

    }
    console.log(pattern)
}