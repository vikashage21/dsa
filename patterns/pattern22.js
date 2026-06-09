//? right angle palindromic triangle


let n = 5;

//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

// starting the loop here

for (let i = 1; i <= n; i++) {
    let pattern = ''
    // spacing adding here

    for (let s = 1; s <= n - i; s++){
        pattern+=' '
    }
        for (let j = 1; j <= (2 * i) - 1; j++) {
            let char = 64
            //! checking the middle position
            if (j <= i) {
                pattern += String.fromCharCode(char + j)
            } else {
                // note : - here we are adding number to char
                pattern += String.fromCharCode(char + (2 * i - j))
            }

        }
    console.log(pattern)
}