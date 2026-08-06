# Memoize Function

## Problem

Given a function `fn`, return a **memoized** version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead, it will return a cached value.

`fn` can be any function, and there are no constraints on the types of values it accepts. Inputs are considered identical if they are **strictly equal (**`===`**)** to each other.

---

## Example 1

### Input

```javascript
getInputs = () => [[2,2],[2,2],[1,2]]

fn = function (a, b) {
    return a + b;
}
```

### Output

```javascript
[
  { "val": 4, "calls": 1 },
  { "val": 4, "calls": 1 },
  { "val": 3, "calls": 2 }
]
```



### Explanation

```javascript
const inputs = getInputs();
const memoized = memoize(fn);

for (const arr of inputs) {
    memoized(...arr);
}
```

- `(2, 2)` → `4`, `fn` is called once.
- `(2, 2)` → Cached result `4`, `fn` is **not** called again.
- `(1, 2)` → `3`, `fn` is called a second time.

---



## Example 2



### Input

```javascript
getInputs = () => [[{}, {}], [{}, {}], [{}, {}]]

fn = function (a, b) {
    return { ...a, ...b };
}
```



### Output

```javascript
[
  { "val": {}, "calls": 1 },
  { "val": {}, "calls": 2 },
  { "val": {}, "calls": 3 }
]
```



### Explanation

Although merging two empty objects always produces `{}`, each object literal is a **different object reference**.

```javascript
{} === {} // false
```

Therefore, every invocation is treated as a new set of arguments.

---



## Example 3



### Input

```javascript
getInputs = () => {
    const o = {};
    return [[o, o], [o, o], [o, o]];
}

fn = function (a, b) {
    return { ...a, ...b };
}
```



### Output

```javascript
[
  { "val": {}, "calls": 1 },
  { "val": {}, "calls": 1 },
  { "val": {}, "calls": 1 }
]
```



### Explanation

The same object `o` is reused for every function call.

```javascript
o === o // true
```

Therefore, all calls after the first one are cache hits.

---



## Starter Code

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    return function (...args) {

    };
}
```

---



## Example Usage

```javascript
let callCount = 0;

const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5

console.log(callCount); // 1
```

---



## Key Observation

Two inputs are considered the same **only if each corresponding argument satisfies** `===`**.**

Examples:

```javascript
const a = {};
const b = {};

a === b; // false
```

```javascript
const o = {};

o === o; // true
```

This means memoization must preserve **reference identity** for objects instead of relying on value-based serialization such as `JSON.stringify()`.