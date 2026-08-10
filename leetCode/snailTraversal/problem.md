# Snail Traversal

**Difficulty:** Medium

---

## Problem Statement

Enhance all arrays such that you can call the method:

```js
snail(rowsCount, colsCount)
```

This method transforms a **1D array** into a **2D array** organized in the pattern known as **snail traversal order**.

- If `rowsCount * colsCount !== nums.length`, the input is considered **invalid** and should return an **empty array**.

---

## Snail Traversal Order

- Starts at the **top-left cell** with the first value of the array.
- Traverses the **first column top → bottom**.
- Moves to the **next column right**, traversing **bottom → top**.
- Alternates direction for each column until the entire array is covered.

---

## Example

**Input:**

```js
nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
rowsCount = 5
colsCount = 4
```

**Output:**

```
[
  [19, 9, 1, 12],
  [10, 8, 17, 18],
  [3, 5, 16, 6],
  [7, 2, 14, 13],
  [   ,   ,   ,   ]
]
```

Iterating the matrix following the arrows corresponds to the order of numbers in the original array.

---

## Constraints

- `rowsCount` and `colsCount` must be positive integers.
- `rowsCount * colsCount === nums.length` for valid transformation.
- Otherwise, return `[]`.

---

## Key Notes

- Alternating traversal direction per column is the essence of snail order.
- Invalid inputs must be handled gracefully.
```

Would you like me to also **add a sample JavaScript implementation** of the `snail()` method inside this `.md` file so it’s fully self-contained?