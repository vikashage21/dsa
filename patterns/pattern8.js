let n = 4;
for (let i = 0; i < n; i++) {
    let pattern = '';
    for (let j = 0; j <= i; j++) {
        let char = String.fromCharCode(65 + j)
        pattern += char
    }
    console.log(pattern)
}

// Range of A to Z is 60 - 90
// pattern

// A
// AB
// ABC
// ABCD