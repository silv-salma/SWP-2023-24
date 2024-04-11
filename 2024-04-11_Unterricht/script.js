function fact (n) {
    if(n<1) throw new Error ("must be 1 or greater");
    if (n===1) return 1;
    return fact (n-1) * n;
}


console.log(fact(3))
console.log(fact(4))
console.log(fact(5))
console.log(fact(6))