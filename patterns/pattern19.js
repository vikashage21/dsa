// 1 

// 0 1 

// 1 0 1 

// 0 1 0 1 

// 1 0 1 0 1
let n = 5
let num = 1;
for (let i = 1; i <= 5; i++) {
    let pattern = ''
    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 === 0) {
            pattern += 1
        } else {
            pattern += 0
        }


    }

    console.log(pattern)
}

