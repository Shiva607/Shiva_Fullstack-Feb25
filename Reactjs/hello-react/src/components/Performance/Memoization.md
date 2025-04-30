The term **`memo`** in `React.memo` stands for **"memoization"**, not an acronym.

### 📌 What is Memoization?
**Memoization** is an optimization technique where the result of a function is **cached** based on its inputs, so that if the same inputs occur again, the cached result is returned instead of re-executing the function.

So, `React.memo` memoizes the **render result** of a component — skipping re-rendering if its **props haven't changed**.

---

### ✅ **1. React.memo**
**Definition**:  
`React.memo` is a higher-order component that prevents a child component from re-rendering if its props haven’t changed.

```jsx
import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <div>Hello, {name}</div>;
});

function MemoExample() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Child name="John" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default MemoExample;
```
> ✅ `Child` won’t re-render when `count` changes, because `name` is unchanged.

---

### ✅ **2. useCallback**
**Definition**:  
`useCallback` memoizes a function so it doesn't get recreated unless its dependencies change.

```jsx
import React from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
});

function UseCallbackExample() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <>
      <Button onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
}

export default UseCallbackExample;
```
> ✅ `Button` won’t re-render on parent update because `handleClick` is memoized.

---

### ✅ **3. useMemo**
**Definition**:  
`useMemo` memoizes the **result** of a computation, recalculating only when dependencies change.

```jsx
import React from "react";

function UseMemoExample({ items }) {
  const [query, setQuery] = React.useState("");

  const filteredItems = React.useMemo(() => {
    console.log("Filtering...");
    return items.filter(item => item.includes(query));
  }, [items, query]);

  return (
    <>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default UseMemoExample;
```
> ✅ Filtering only happens when `items` or `query` changes — not every render.

---