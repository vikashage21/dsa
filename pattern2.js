let n = 5;
for (let i = 1; i <= n; i++) {
    // row 
    let pattern = ''
    let star = '*'
    for (let j = 1; j <= i; j++) {
        pattern += star;

    }
    console.log(pattern)
}