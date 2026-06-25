// find the largest number 

function findLargest(a,b,c){
    return a > b ? a : b &&  b > c ? b : c
11
}

const res = findLargest(10, 8 , 6)

console.log(res)