// find armStrong number

let num = 147;
function armStrong(num) {
    let tl = 0;
    let digit = num

    while (digit > 0) {
        let lt = digit % 10;
        let cube = lt ** 3
        tl += cube
        digit = Math.floor(digit / 10);
    }
    return tl == num
}

const ans = armStrong(num)
console.log(ans)