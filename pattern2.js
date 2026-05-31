let n = 5;
let s = 4;
for (let i = 1; i <= n; i++) {
    // row 
    let pattern = ''
    let star = '*'
    for (let j = 1; j <= i; j++) {
        pattern += star;

    }
    //space
    for (let k = 1; k <= s; k++) {
        pattern += ' ';
    }

    s--

    console.log(pattern)
}