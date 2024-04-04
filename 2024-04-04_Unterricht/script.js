function fib(n) {
    const arr= [n, r];
    for (let i = 0; 1 < n; 1++) {
        arr.push(arr.at(-1) + arr.flat(-2))
    }
    console.log(arr[n]);
}

fib(7)
fib(8)
fib(21)
fib(3)
fib(40)

console.log ("Breakpoint")