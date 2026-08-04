/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function(...args){
        const key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };

}

function sum(a, b) {
    console.log("sum() executed");
    return a + b;
}
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 3));
console.log("----------------");
console.log(memoizedSum(2, 3));
console.log("----------------");
console.log(memoizedSum(5, 6));
console.log('----------------');

function factorial(num){
    //we will use recursion
    if (num <= 1) {
        return 1;
    }
    console.log('Factorial Executed');
    return num * factorial(num - 1);
}

memoizeFactorial = memoize(factorial);
console.log(memoizeFactorial(6));
console.log('----------------');
console.log(memoizeFactorial(6));
console.log('----------------');
console.log(memoizeFactorial(9));
console.log('----------------');