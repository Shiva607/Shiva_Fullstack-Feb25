**Higher-order functions** in **JavaScript** — these are functions that take other functions as arguments or return functions.

---

| S.NO | Function        | Description                                                               |
| ---- | --------------- | ------------------------------------------------------------------------- |
| 1    | `map()`         | Transforms each element in an array and returns a new array               |
| 2    | `filter()`      | Returns a new array containing elements that match a condition            |
| 3    | `reduce()`      | Reduces the array to a single value using an accumulator                  |
| 4    | `forEach()`     | Executes a function on each element (no return value)                     |
| 5    | `find()`        | Returns the first element that matches a condition                        |
| 6    | `some()`        | Returns `true` if at least one element passes a condition                 |
| 7    | `every()`       | Returns `true` if all elements pass a condition                           |
| 8    | `sort()`        | Sorts array elements (can take a comparator function)                     |
| 9    | `setTimeout()`  | Executes a function after a delay (returns a timer ID)                    |
| 10   | `setInterval()` | Executes a function repeatedly with a fixed time delay                    |
| 11   | `reduce()`      | Reduces the array to a single value using an accumulator (already listed) |

---

### ✅ Higher-Order Functions with Examples

```javascript
const numbers = [1, 2, 3, 4, 5];
const users = [
  { id: 1, name: "Jinwoo", age: 22 },
  { id: 2, name: "Hae-In", age: 27 },
  { id: 3, name: "Jinho", age: 18 }
];

// 1. map() – Transform each value
const doubled = numbers.map(n => n * 2);
// Output: [2, 4, 6, 8, 10]

// 2. filter() – Keep only values that match
const evens = numbers.filter(n => n % 2 === 0);
// Output: [2, 4]

// 3. reduce() – Combine values into one
const sum = numbers.reduce((acc, val) => acc + val, 0);
// Output: 15

// 4. forEach() – Run something for each value
numbers.forEach(n => console.log(n));
// Output: 1 2 3 4 5 (individually logged)

// 5. find() – Find the first match
const adult = users.find(u => u.age >= 21);
// Output: { id: 1, name: 'Jinwoo', age: 22 }

// 6. some() – Check if at least one matches
const hasTeen = users.some(u => u.age < 20);
// Output: true

// 7. every() – Check if all match
const allAdults = users.every(u => u.age >= 18);
// Output: true

// 8. sort() – Sort values (ascending)
const sorted = [...numbers].sort((a, b) => a - b);
// Output: [1, 2, 3, 4, 5]

// 9. setTimeout() – Delayed execution
setTimeout(() => {
  console.log("Hello after 1 second");
}, 1000);

// 10. setInterval() – Repeat every time interval
const interval = setInterval(() => {
  console.log("Repeats every second");
  clearInterval(interval); // Stops after 1 execution for demo
}, 1000);

const numbers = [10, 20, 30, 40];

// 11. Add all numbers using reduce
const total = numbers.reduce((acc, val) => acc + val, 0);

console.log(total); // Output: 100
```

---
