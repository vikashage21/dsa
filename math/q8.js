//? sum of natural number

let n = 5;

function sumOfNaturalNumber(n) {
    let res = 0
    for (let i = 1; i <= n; i++) {
        res += i
    }
    return res
}

const res = sumOfNaturalNumber(n);
console.log(res)