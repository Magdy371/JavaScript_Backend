# Memoize (LeetCode 2623)

## 📖 Problem Statement
Given a function `fn`, return a **memoized version** of that function.

A memoized function:
- Stores results of previous calls.
- Returns cached values when called again with the same inputs.
- Tracks how many times the original function `fn` was actually executed.

You can assume there are 3 possible input functions:
- **sum**: accepts two integers `a` and `b`, returns `a + b`.  
  *Note: `(a, b)` and `(b, a)` are considered different.*
- **fib**: accepts integer `n`, returns Fibonacci number.
- **factorial**: accepts integer `n`, returns factorial.

---

## ⚙️ Constraints
- \(0 \leq a, b \leq 10^5\)  
- \(1 \leq n \leq 10\)  
- \(1 \leq actions.length \leq 10^5\)  
- `actions[i]` ∈ { `"call"`, `"getCallCount"` }  
- `fnName` ∈ { `"sum"`, `"factorial"`, `"fib"` }

---

## 🧩 Examples

### Example 1
```js
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]

Output: [4,4,1,3,2]
```

Explanation:
- `memoizedSum(2,2)` → 4 (fn executed)
- `memoizedSum(2,2)` → 4 (cached)
- `getCallCount()` → 1
- `memoizedSum(1,2)` → 3 (fn executed)
- `getCallCount()` → 2

---

### Example 2
```js
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]

Output: [2,6,2,2,6,2]
```

---

### Example 3
```js
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]

Output: [8,1]
```

---

## 💡 Simple Solution

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  let callCount = 0;

  function memoized(...args) {
    const key = args.join(','); // simple key
    if (cache[key] !== undefined) return cache[key];
    callCount++;
    return (cache[key] = fn(...args));
  }

  memoized.getCallCount = () => callCount;
  return memoized;
}
```

---

## 🚀 Usage Example
```javascript
const sum = (a, b) => a + b;
const memoSum = memoize(sum);

console.log(memoSum(2, 2)); // 4
console.log(memoSum(2, 2)); // 4 (cached)
console.log(memoSum.getCallCount()); // 1
```

---

## 🔑 Key Takeaways
- **Memoization** avoids redundant computation.  
- **Cache keys** must uniquely represent argument lists.  
- **Call count** only increases when the original function executes.  

---