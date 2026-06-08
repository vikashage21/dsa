
// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

let n = 5;
for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += j
    }
    for (let s = 1; s <= 2 *( n - i) ; s++) {
        pattern += ' '
    }
    for (let k = i; k >= 1; k--) {
        pattern += k;
    }
    console.log(pattern)
}