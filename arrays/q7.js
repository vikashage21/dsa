let arr = [1,3,5,7,9];


function sumOfMaxAndMin(arr) {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
    let maxSum = 0;
    let minSum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {

        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }

    }

    maxSum = sum - min
    minSum = sum - max


    return { min: minSum , max: maxSum }

}

const res = sumOfMaxAndMin(arr);
console.log(res)


// output { min: 16, max: 24 }

// note - solution 
// find the sum of array element
// find min and max
// maxsum = sum - min
// minsum = sum - max 