### 🧾 **Logical AND (`&&`) in JavaScript – Q&A Table**

| S.NO | Question                                                                               | Answer                                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | What does the `&&` (logical AND) operator do in JavaScript?                            | It checks the left side; if it's **truthy**, it returns the right side. If the left side is **falsy**, it returns the left side.           |
| 2    | Does `&&` always evaluate both sides?                                                  | No. It only evaluates the **right side** if the **left side is truthy**. This is called **short-circuiting**.                              |
| 3    | How is `&&` used in React for rendering?                                               | It's used for **conditional rendering**. Example: `{show && <Component />}` renders the component **only if** `show` is `true`.            |
| 4    | What happens if the left side (`show`) is `false` in `{show && <Comp />}`?             | The component is **not rendered** at all. React skips the right-hand part.                                                                 |
| 5    | Can you give a real example of using `&&` in React?                                    | Yes: `<div>{isLoggedIn && <h1>Welcome!</h1>}</div>` – it shows "Welcome!" only if `isLoggedIn` is true.                                    |
| 6    | Why is `&&` useful in JSX?                                                             | It lets you conditionally show parts of the UI **without writing if-else or ternary expressions**, making code cleaner.                    |
| 7    | What type of values are considered falsy in JavaScript?                                | `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`. If any of these are on the left side, the right side won't be executed. |
| 8    | What will the output be?<br>`let a = 1; let b = false; b && (a = 10); console.log(a);` | Output: `1`. Because `b` is false, the assignment `(a = 10)` is **skipped** and `a` remains unchanged.                                     |

---

# **3 common ways to conditionally render in React**:

---

### 🧾 **React Conditional Rendering Techniques**

| S.NO | Method             | Syntax Example                                                                                         | Use Case / When to Use                                         |
| ---- | ------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| 1    | `if` statement     | ```<>{if (show) return <Comp />}</>``` *(❌ Invalid directly in JSX)*<br>✅ Must be inside function body | When logic is complex or includes `else`, use inside functions |
| 2    | `&&` (Logical AND) | ```{show && <Comp />}```                                                                               | ✅ Best for rendering **only when condition is true**           |
| 3    | Ternary (`? :`)    | ```{show ? <Comp /> : <OtherComp />}```                                                                | ✅ Best when choosing between **two different components**      |

---

### ✅ Full Code Comparison:

#### 1️⃣ `if` Statement (used inside the component, not JSX directly)
```jsx
function App() {
  if (!show) return null;

  return <Comp />;
}
```

#### 2️⃣ Logical `&&`
```jsx
function App() {
  return (
    <>
      {show && <Comp />}
    </>
  );
}
```

#### 3️⃣ Ternary `? :`
```jsx
function App() {
  return (
    <>
      {show ? <Comp /> : <OtherComp />}
    </>
  );
}
```

---

### 💡 Quick Tips:

- Use `&&` when you **only render something when true**.
- Use `? :` when you **want to render either A or B**.
- Use `if` when things get complicated (e.g., `if-else`, loops, variables).

---