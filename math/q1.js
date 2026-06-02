// sum of digit 


// for example - 1234 10


function findSumOfDigit(num) {
    let total = 0;
    while (num > 0) {
        // getting the last number
       let lastNumber = Math.trunc(num % 10);
    //    adding the last number to total
        total += lastNumber
        // assigning the new value to num
        num = Math.trunc( num / 10)
    }
    return total
}

const ans =findSumOfDigit(12345)

console.log(ans)