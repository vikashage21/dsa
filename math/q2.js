// valid triangle

// -> two side of triangle is greater than other side  
function validTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        return true
    } else {
        return false
    }
}

const ans = validTriangle(4, 5, 6)
console.log(ans)