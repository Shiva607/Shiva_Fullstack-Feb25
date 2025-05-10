# Jest

## 1. Integrating **Jest** with **React**
Integrating **Jest** with **React** is smooth, especially because **Create React App (CRA)** includes Jest by default. Below are two ways to integrate Jest depending on your setup.

---

### ✅ 1. If You're Using **Create React App (CRA)**

#### ✅ Already Done:

* Jest is already installed and pre-configured.
* You can directly write test files.

### 📂 Folder Structure Example:

```
src/
  App.js
  App.test.js  ← Jest will automatically detect and run this
```

### ✅ Example Test (`App.test.js`)

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
```

### ▶️ Run Tests:

```bash
npm test
```

---

### ✅ 2. If You're NOT Using Create React App

### 🔧 Step-by-Step:

#### 1. **Install Jest & React Testing Library**

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

#### 2. **Configure Babel (for JSX support)**

Install Babel and presets:

```bash
npm install --save-dev @babel/preset-env @babel/preset-react babel-jest
```

Create a `babel.config.js`:

```js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

#### 3. **Configure Jest (optional)**

You can add this to `package.json` or use `jest.config.js`:

```json
"jest": {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
}
```

---

## 🧪 Sample Component & Test

### `Greeting.js`

```js
export default function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

### `Greeting.test.js`

```js
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message', () => {
  render(<Greeting />);
  expect(screen.getByText(/hello, react/i)).toBeInTheDocument();
});
```

---


## **2. If my `package.json` has the following scripts:**
>
> ```json
> "scripts": {
>   "start": "react-scripts start",
>   "build": "react-scripts build",
>   "test": "react-scripts test",
>   "eject": "react-scripts eject"
> }
> ```
>
> **— will running `npm test` execute React or Jest?**

Great question! Here's the clarification:

### ✅ What `npm test` runs in your case:

Since your `package.json` has this:

```json
"test": "react-scripts test"
```

### 💡 This means:

* When you run `npm test`, it runs `react-scripts test`
* And **`react-scripts test` internally uses Jest** behind the scenes
* So yes, it **runs Jest**, but it's managed by Create React App (CRA)

---

### ✅ Summary:

| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm test`      | Runs Jest (via `react-scripts test`) |
| `npm run build` | Builds your React app                |
| `npm start`     | Starts the React dev server          |

---

# jest.config.js

The `jest.config.js` file you’ve shown is a configuration file for [Jest](https://jestjs.io/), a JavaScript testing framework used primarily for testing React applications and other JavaScript/TypeScript codebases. Here’s a line-by-line explanation of your configuration:

```js
module.exports = {
```

This line exports the configuration object so Jest can use it. It's using `CommonJS` syntax.

---

```js
  testEnvironment: 'jsdom',
```

This sets the **test environment** to `'jsdom'`, which simulates a browser-like environment in Node.js. This is useful for testing code that interacts with the DOM, such as React components.

* Alternatives: `'node'` (for non-browser code), `'jsdom'` (for browser-like testing).
* JSDOM mimics the browser's API (e.g., `document`, `window`, etc.), which React apps often depend on.

---

```js
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
```

This tells Jest **where to look for test files**:

1. `**/__tests__/**/*.[jt]s?(x)`

   * Matches files in any `__tests__` folder.
   * `[jt]s?(x)` matches `.js`, `.ts`, `.jsx`, or `.tsx` files.

2. `**/?(*.)+(spec|test).[jt]s?(x)`

   * Matches any file ending in `.spec.js`, `.test.tsx`, etc.
   * Useful when tests are co-located with components or modules.

---

### Summary

Your `jest.config.js` tells Jest to:

* Use a simulated browser environment (via JSDOM).
* Look for test files in `__tests__` directories or files ending with `.test.js`, `.spec.tsx`, etc.

---
## Jest `testMatch` pattern in detail:

### 1. `**/__tests__/**/*.[jt]s?(x)`

#### Meaning:

This pattern tells Jest to look for test files **inside any `__tests__` directory**, at any depth.

#### Breakdown:

| Part          | Meaning                                                            |
| ------------- | ------------------------------------------------------------------ |
| `**/`         | Match any folder (any depth in the project)                        |
| `__tests__/`  | Folder name must be `__tests__`                                    |
| `**/`         | Match any subfolder or file inside `__tests__`                     |
| `*.[jt]s?(x)` | Match files with these extensions:<br>`.js`, `.jsx`, `.ts`, `.tsx` |

#### Matches:

* `src/__tests__/App.test.js`
* `components/__tests__/Button.spec.tsx`
* `__tests__/utils/math.ts`

---

### 2. `**/?(*.)+(spec|test).[jt]s?(x)`

#### Meaning:

This pattern matches **any test files** that include `.spec` or `.test` before the extension, regardless of folder location.

#### Breakdown:

| Part         | Meaning                                                                      |                                 |
| ------------ | ---------------------------------------------------------------------------- | ------------------------------- |
| `**/`        | Match any folder                                                             |                                 |
| `?(*.)`      | Match optional prefix before the dot (e.g., `App.`, `index.`, or just `App`) |                                 |
| \`+(spec     | test)\`                                                                      | Match either `.spec` or `.test` |
| `.[jt]s?(x)` | Match extensions `.js`, `.ts`, `.jsx`, `.tsx`                                |                                 |

#### Matches:

* `App.test.js`
* `Login.spec.tsx`
* `pages/home.test.ts`
* `utils/calc.spec.jsx`

---

### ✅ Summary Table

| S.NO | Pattern                       | What It Matches                            | Example File Paths                                          |                                       |
| ---- | ----------------------------- | ------------------------------------------ | ----------------------------------------------------------- | ------------------------------------- |
| 1    | `**/__tests__/**/*.[jt]s?(x)` | Any test files inside a `__tests__` folder | `src/__tests__/App.test.ts`                                 |                                       |
| 2    | \`\*\*/?(\*.)+(spec           | test).\[jt]s?(x)\`                         | Any test files with `.spec` or `.test` before the extension | `Home.test.jsx`, `utils/math.spec.ts` |

---



