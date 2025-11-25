function fibRecursion(length, f = 0, n = 1, result = []) {
    if (length <= 0) {
        return result;
    }
    result.push(f);    
    return fibRecursion(length - 1, n, f + n, result);
}

const a = fibRecursion(1);
console.log(`Fibonacci (length = 1):`, a);

const b = fibRecursion(5);
console.log(`Fibonacci (length = 5):`, b);

const c = fibRecursion(10);
console.log(`Fibonacci (length = 10):`, c);