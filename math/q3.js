// fibonacci series

function fibonacciSeries(n) {
    let a = 1;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a)
        let c = a + b;
        a = b
        b = c
    }}
 fibonacciSeries(9)  
