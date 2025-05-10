# complete overview of React Testing Library

## ✅ Installation with Create React App

### 🔹 Full Template (default):

```bash
npx create-react-app testing
```

* ✅ Includes `react-scripts`
* ✅ Includes **Jest**
* ✅ Includes **React Testing Library** (`@testing-library/react`, `jest-dom`, etc.)
* ✅ Includes example test files

---

### 🔹 Minimal Template:

```bash
npx create-react-app testing --template minimal
```

* ✅ Includes `react-scripts` and **Jest**
* ❌ **Does NOT include** React Testing Library (`@testing-library/react`)
* ❌ No example test files
* ✅ You need to install testing libraries manually

---

## **complete overview of React Testing Library**, covering its purpose, setup, usage, file structure, and integration with tools like Jest.

---

## 🔷 1. What is React Testing Library?

**React Testing Library (RTL)** is a lightweight JavaScript testing utility built specifically to test React components in a way that reflects how users interact with them.

> ⚡ Philosophy: **Test behavior, not implementation** — focus on how your component renders and reacts, not how it's built internally.

---

## 🔷 2. Why Use It?

| Feature                        | Benefit                                         |
| ------------------------------ | ----------------------------------------------- |
| DOM-based testing              | Tests simulate how users interact with the UI   |
| Works with Jest                | Seamlessly integrates with the Jest test runner |
| Encourages best practices      | Avoids testing implementation details           |
| Built-in accessibility queries | Helps you write more inclusive, accessible code |
| Included with Create React App | No extra config needed in CRA apps              |

---

## 🔷 3. Installation

### ✅ If using **Create React App**:

Already installed.

### ✅ Manual install:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

## 📦 What Each Package Does

| Package                       | Purpose                                                                    |
| ----------------------------- | -------------------------------------------------------------------------- |
| `@testing-library/react`      | Core library for testing **React** components                              |
| `@testing-library/jest-dom`   | Adds custom Jest matchers like `toBeInTheDocument()` for better assertions |
| `@testing-library/user-event` | Simulates **real user interactions** like typing, clicking, tabbing        |
| `@testing-library/dom`        | Provides low-level DOM utilities used by all Testing Library frameworks    |

---

### 🔎 Note:

* `@testing-library/react` is **built on top of** `@testing-library/dom`.
* You usually **don’t install `@testing-library/dom` directly** unless you’re writing framework-agnostic or library-level tools.
---

## 🔷 4. Folder Location (Installed Path)

If installed via `npm`, it will be located at:

```
<your-project>/node_modules/@testing-library/react/
```

E.g. on your system:

```
E:\Fullstack-Testleaf\Reactjs\testing\node_modules\@testing-library\react\
```

---

## 🔷 5. Basic Usage Example

### ✅ `Greeting.js`

```jsx
export default function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

### ✅ `Greeting.test.js`

```jsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting', () => {
  render(<Greeting />);
  expect(screen.getByText(/hello, react/i)).toBeInTheDocument();
});
```

---

## 🔷 6. Core API Overview

| Function          | Purpose                                            |
| ----------------- | -------------------------------------------------- |
| `render()`        | Renders a component into a virtual DOM for testing |
| `screen`          | Global access to query the rendered output         |
| `fireEvent()`     | Simulates user events (clicks, inputs, etc.)       |
| `waitFor()`       | Waits for async changes in the DOM                 |
| `getByText()`     | Finds elements by visible text                     |
| `getByRole()`     | Finds elements by accessibility role               |
| `queryByTestId()` | Finds elements by `data-testid`                    |

---

## 🔷 7. Example with User Interaction

### ✅ `Button.js`

```jsx
import { useState } from 'react';

export default function Button() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <button onClick={() => setClicked(true)}>Click Me</button>
      {clicked && <p>Clicked!</p>}
    </div>
  );
}
```

### ✅ `Button.test.js`

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('shows message on click', () => {
  render(<Button />);
  fireEvent.click(screen.getByText('Click Me'));
  expect(screen.getByText('Clicked!')).toBeInTheDocument();
});
```

---

## 🔷 8. Best Practices

* Prefer queries like `getByRole`, `getByText` over `getByTestId`
* Avoid relying on internal component state or structure
* Use `jest-dom` for better assertions (`toBeInTheDocument`, etc.)

---

## 🔷 9. Additional Libraries

| Library                       | Use Case                                    |
| ----------------------------- | ------------------------------------------- |
| `@testing-library/jest-dom`   | Custom matchers for DOM assertions          |
| `@testing-library/user-event` | Higher-level user simulation (typing, etc.) |
| `jest`                        | Test runner used to execute your RTL tests  |

---

## **Why am I not able to see `@testing-library/react` in this path?**
> `E:\Fullstack-Testleaf\Reactjs\testing\node_modules\@testing-library\react\`


then here are the possible reasons and steps to resolve it:

---

## ✅ 1. Check if it's Installed

### Run this command in your project root:

```bash
npm ls @testing-library/react
```

### 🔄 Output:

* ✅ If it's installed:

  ```
  testing@1.0.0
  └── @testing-library/react@13.x.x
  ```
* ❌ If it's **not installed**:

  ```
  -- @testing-library/react@ not found
  ```

---

## ✅ 2. Install it Manually

If not present, run:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

> This will create the missing folder in `node_modules/@testing-library/react/`.

---

## ✅ 3. Try Searching in `react-scripts`

Sometimes React Testing Library is **not directly listed** in your project, but instead is nested under `react-scripts`.

Run this command:

```bash
npm ls @testing-library/react --all
```

Look for paths like:

```
react-scripts > @testing-library/react
```

Or browse manually to:

```
E:\Fullstack-Testleaf\Reactjs\testing\node_modules\react-scripts\node_modules\@testing-library\react\
```

---

## ✅ 4. Still Not Found?

If you still don’t see it, it's likely that:

* `react-scripts` version doesn’t bundle it anymore (in newer versions).
* You need to **explicitly install it** in your project (see step 2).

---


## I used `npx create-react-app testing --template minimal`, so why is `@testing-library/react` not present in my `node_modules` folder?

You used:

```bash
npx create-react-app testing --template minimal
```

### 🔍 What That Means:

The `--template minimal` option **creates a bare-bones React setup** with **almost no extras** — including **no testing libraries**.

---

### ❌ What's Missing in Minimal Template:

| Feature                     | Included? |
| --------------------------- | --------- |
| Jest (via `react-scripts`)  | ✅ Yes     |
| `@testing-library/react`    | ❌ No      |
| `@testing-library/jest-dom` | ❌ No      |
| Example test files          | ❌ No      |

So that’s why this folder is **missing**:

```
E:\Fullstack-Testleaf\Reactjs\testing\node_modules\@testing-library\react\
```

---

### ✅ To Fix It — Install the Testing Tools Manually:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Now, the path will exist:

```
E:\Fullstack-Testleaf\Reactjs\testing\node_modules\@testing-library\react\
```


