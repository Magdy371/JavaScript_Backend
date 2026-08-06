function memoize(fn) {
    const cache = new Map();
    const RESULT = Symbol();
    return function(...args) {
        let current = cache;
        for(const arg of args){
            if(!current.has(arg)){
                current.set(arg, new Map());
            }
            current = current.get(arg);
        }
        if (current.has(RESULT)) {
            return current.get(RESULT);
        }
        const result = fn(...args);
        current.set(RESULT, result);
        return result;
    };
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));
console.log(memoizedSum({}, {}));