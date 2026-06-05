// pattern

// A
// BB
// CCC
// DDDD
// EEEEE

let n = 2


for (let i = 0; i < n; i++) {
    let pattern = ''
    for (let j = 0; j <= i; j++) {

        let char = String.fromCharCode(65 + i)
        pattern += char

    }
    console.log(pattern)
}