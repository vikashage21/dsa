// pattern

// E
// D E 
// C D E 
// B C D E 
// A B C D E



let n = 4;
for (let i = 0; i < n; i++) {
    let pattern = '';
    let k = n - 1
    for (let j = 0; j <= i; j++) {
        let char = String.fromCharCode(65 + k)
        pattern += char
        k--
    }
    console.log(pattern.split('').reverse().join(' '))
}