// pattern 

// ABCDE
// ABCD
// ABC
// AB
// A

let n = 2;


for (let i = 0; i < n; i++) {
    let pattern = '';
    let k = 0
    for (let j = n - i; j > 0; j--) {
        let char = String.fromCharCode(65 + k)
        pattern += char
        k++
    }
    console.log(pattern)
}