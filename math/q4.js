let a = 2   
let b = 10;

// 2 to the power of 10
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

const ans = power(a, b)
console.log(ans)