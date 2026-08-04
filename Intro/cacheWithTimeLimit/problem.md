```markdown

```

# Time-Limited Cache

Write a class that allows getting and setting key-value pairs, where each key has a time until expiration (in milliseconds).

The class has three public methods:

- `set(key, value, duration)`: accepts an integer `key`, an integer `value`, and a `duration` in milliseconds. Once the `duration` has elapsed, the key should be inaccessible. Returns `true` if the same un-expired key already existed and was overwritten, and `false` otherwise. If the key already exists and is un-expired, both the value and duration should be overwritten.

- `get(key)`: returns the associated value if the key exists and is un-expired; otherwise returns `-1`.

- `count()`: returns the count of un-expired keys.

## Examples

Example 1:

```
Input:
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]
Output: [null, false, 42, 1, -1]
Explanation:
At t=0, the cache is constructed.
At t=0, a pair (1: 42) is added with duration 100ms → returns false (no prior un-expired key).
At t=50, get(1) → 42.
At t=50, count() → 1.
At t=100, key=1 expires.
At t=150, get(1) → -1.
```

Example 2:

```
Input:
actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
timeDelays = [0, 0, 40, 50, 120, 200, 250]
Output: [null, false, true, 50, 50, -1, 0]
Explanation:
At t=0, the cache is constructed.
At t=0, set(1, 42, 50) → false.
At t=40, set(1, 50, 100) → true (previous un-expired key overwritten).
At t=50, get(1) → 50.
At t=120, get(1) → 50.
At t=140, key=1 expires.
At t=200, get(1) → -1.
At t=250, count() → 0.
```

## Constraints

- 0 <= key, value <= 10^9
- 0 <= duration <= 1000
- 1 <= actions.length <= 100
- actions.length === values.length === timeDelays.length
- 0 <= timeDelays[i] <= 1450
- actions[i] is one of "TimeLimitedCache", "set", "get" and "count"
- The first action is always "TimeLimitedCache" and must be executed immediately (0 ms delay).

