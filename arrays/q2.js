// find the unique element in array 

let arr = [1, 5, 5, 6, 7, 8, 9,9]

let newArray = []
for (let j = 0; j <= arr.length -1; j++) {
    let frequency = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[j] == arr[i]) {
            frequency++
        }
    }
    // checking the frequency here
    if (frequency == 1) {
        // storing the element in array
        newArray.push(arr[j])
    }
}

console.log(newArray)