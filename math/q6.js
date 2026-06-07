// reverse a Number
let num = 25;

function reverseNumber(num) {

    let reverse = '';
    while (num > 0) {
        let lastNumber = num % 10;
        reverse += lastNumber;
        num = Math.floor(num / 10)
    }
    console.log(reverse)
}

reverseNumber(num)