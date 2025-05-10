# React Test Renderer

**Is `react-test-renderer` installed by default when installing React version ^19.1.0?**

No, `react-test-renderer` is **not installed by default** when you install React version ^19.1.0. It is a **separate optional package** that must be installed manually if you want to use it. However, starting from React 19, this package is **deprecated** and no longer recommended for new projects. Instead, React recommends using libraries like `@testing-library/react` for testing components in a more reliable and user-centric way.
---

**"Is `react-test-renderer` still supported and recommended in React version 19.1.0, or should I use an alternative testing library?"**

Yes, the `react-test-renderer` package is still available in React version 19.1.0. However, it's important to note that this package has been officially deprecated and is no longer maintained. While you can install and use it, doing so will trigger a deprecation warning in the console when invoking `ReactTestRenderer.create()` .([npm][1])

### Why It’s Deprecated

The React team deprecated `react-test-renderer` because it creates a simulated environment that doesn't accurately reflect how components behave in real browsers or native environments. This approach can lead to brittle tests that rely on React's internal implementation details, which are subject to change .([npm][2])

### Recommended Alternatives

For a more robust and future-proof testing strategy, the React team recommends using the following libraries:

* **@testing-library/react**: Ideal for testing React components in web applications. It encourages testing components in a way that simulates user interactions and behavior.

* **@testing-library/react-native**: Designed for testing React Native components, providing utilities to test components in a native-like environment.

These libraries focus on testing the component's behavior from the user's perspective, leading to more reliable and maintainable tests.

### Summary

While `react-test-renderer` version 19.1.0 is still available, it's deprecated and not recommended for use in new projects. For modern and maintainable testing practices, consider migrating to `@testing-library/react` or `@testing-library/react-native` depending on your project's platform.

([react-test-renderer (DEPRECATED) - NPM][1])
([react-test-renderer - NPM][2])
([react-test-renderer Deprecation Warnings][3])

[1]: https://www.npmjs.com/package/react-test-renderer?utm_source=chatgpt.com "react-test-renderer (DEPRECATED) - NPM"
[2]: https://www.npmjs.com/package/react-test-renderer?activeTab=versions&utm_source=chatgpt.com "react-test-renderer - NPM"
[3]: https://react.dev/warnings/react-test-renderer?utm_source=chatgpt.com "react-test-renderer Deprecation Warnings"

Here’s the **installation section** you can include with the question and answer:

---

### 🛠 Installation (if still needed)

If you still need to use `react-test-renderer` (not recommended for new projects):

```bash
npm install react-test-renderer
```

Or using Yarn:

```bash
yarn add react-test-renderer
```

> ⚠️ **Note:** This will trigger a deprecation warning in React 19+. It’s better to use [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for testing React components.

---

Great observation — here's the clarification in **question and answer** form based on your experience using Create React App (CRA):

---

**Is `@testing-library/react` available by default when using Create React App (CRA) with React version ^19.1.0?**

Yes, when you create a new project using **Create React App (CRA)**, the package `@testing-library/react` is **installed by default**, even if you're using React version ^19.1.0. CRA includes a basic testing setup out of the box, which also brings in `@testing-library/jest-dom` and related utilities, allowing you to start writing component tests immediately without manual installation.

> ⚠️ Note: If you set up your project without CRA (e.g., Vite, Next.js, or custom config), this library **won’t be included by default**, and you’ll need to install it manually.

---




