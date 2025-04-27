# 🌟 1. Reach Router Example (`@reach/router`)

```jsx
// AppReach.jsx
import React from 'react';
import { Router, Link } from '@reach/router';

const Home = () => <h2>Home Page (Reach Router)</h2>;
const About = () => <h2>About Page (Reach Router)</h2>;

function AppReach() {
  return (
    <div>
      <h1>Reach Router Example</h1>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default AppReach;
```

---

# 🌟 2. React Router Example (`react-router-dom` v6)

```jsx
// AppReact.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home Page (React Router)</h2>;
const About = () => <h2>About Page (React Router)</h2>;

function AppReact() {
  return (
    <div>
      <h1>React Router Example</h1>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppReact;
```

---

✅ **Summary**:  
- `AppReach.jsx` → only **Reach Router**  
- `AppReact.jsx` → only **React Router**

---

# 📍 In **Reach Router** → use `navigate()`

Example:

```jsx
import { navigate } from '@reach/router';

function GoToAbout() {
  const go = () => {
    navigate('/about');
  };

  return <button onClick={go}>Go to About (Reach)</button>; // call a separate function
  // OR
  // return <button onClick={()=> navigate('/about')}>Go to About (Reach)</button>; // inline function to navigate
}
```
✅ `navigate('/path')` changes the route.

---

# 📍 In **React Router** → use `useNavigate()`

Example:

```jsx
import { useNavigate } from 'react-router-dom';

function GoToAboutReact() {
  const navigate = useNavigate();

  const go = () => {
    navigate('/about');
  };

  return <button onClick={go}>Go to About (React)</button>;
}
```
✅ `useNavigate()` gives you a `navigate('/path')` function.

---

# 🔥 Simple Mapping:

| Feature             | Reach Router                               | React Router                                     |
| ------------------- | ------------------------------------------ | ------------------------------------------------ |
| Navigation Function | `navigate('/about')`                       | `useNavigate()` → `navigate('/about')`           |
| How to import       | `import { navigate } from '@reach/router'` | `import { useNavigate } from 'react-router-dom'` |

---

**calling** `useNavigate()` **inside the `onClick`** directly — that's **wrong**.

---

# 🚫 What's wrong?
```jsx
<button onClick={() => useNavigate("/")}>Goto home</button>
```
- `useNavigate()` is a **React hook**.
- **Hooks must be called at the top** level of the component, **NOT inside functions like onClick**.

---

# ✅ Correct way:

```jsx
import { useNavigate } from "react-router-dom";
import React from "react";

export default function About() {
  const navigate = useNavigate(); // call hook at top

  return (
    <div>
      <h3>About Us</h3>
      <button onClick={() => navigate("/")}>Goto home</button> {/* now just call navigate */}
    </div>
  );
}
```

**Explanation:**
- You first call `useNavigate()` **once** when component renders.
- It **gives you** a `navigate` function.
- Then, inside the `onClick`, you **use** that `navigate("/")`.

---

# ⚡ Small Summary:

| Wrong Way                               | Correct Way                                                                   |
| :-------------------------------------- | :---------------------------------------------------------------------------- |
| `() => useNavigate("/")` inside onClick | `const navigate = useNavigate();` at top and `() => navigate("/")` in onClick |

---

# Your code:
```jsx
import { navigate } from '@reach/router';

function GoToAbout() {
  const go = () => {
    navigate('/about');
  };

  return <button onClick={go}>Go to About (Reach)</button>;

  // OR
  // return <button onClick={() => navigate('/about')}>Go to About (Reach)</button>;
}
```

---

# 🌟 Both ways are 100% correct:

| Style                                | Meaning                         |
| :----------------------------------- | :------------------------------ |
| `onClick={go}`                       | call a **separate function**    |
| `onClick={() => navigate('/about')}` | **inline function** to navigate |

Both trigger `navigate('/about')` when the button is clicked.

---

# 🚀 Why it works here (in Reach Router)?
- `navigate` is **NOT a hook**.
- It's a **normal function**, so you can call it **anywhere** (inside onClick, inside other functions, no problem).

---

# ⚡ Quick Reminder:

| Library                           | navigate() type      | Rules                                                 |
| :-------------------------------- | :------------------- | :---------------------------------------------------- |
| Reach Router (`@reach/router`)    | simple function      | Call anywhere                                         |
| React Router (`react-router-dom`) | hook (`useNavigate`) | Must call `useNavigate()` **at top**, then use result |

---