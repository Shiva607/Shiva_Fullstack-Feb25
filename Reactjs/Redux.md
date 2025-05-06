# **Redux Flow Diagram**

![Redux Flow Diagram](https://lh7-us.googleusercontent.com/gBH2Ox4ahs9p1mgN9W2jHwTe_lGCp7Asfeo-qLkhb03hTpCo7vhy2JAbytn9mPuizT3DreqGK6cl2TdUMo0SVI74rKBkKqRKL4dqxz6RARQU3vufDDscq92Ig72VfltswXCXwcMGDDvJvGJDECLnuf1pSyxCJxSQXf5gnHWjS9Je5VCpgw5ea_7HBXg5hg)

## **Resources:**

* Core Concepts and Integration: [https://www.yourteaminindia.com/tech-insights/redux-in-react-core-concepts-and-integration](https://www.yourteaminindia.com/tech-insights/redux-in-react-core-concepts-and-integration)

## **Redux in React: Core Concepts and Integration**

**1. Introduction to Redux**
Redux is a predictable state container for JavaScript applications, most commonly used with React. It helps manage the state of the app in a single immutable state tree, ensuring consistent behavior.

**Official Resources:**

* Redux Official Site: [https://redux.js.org/](https://redux.js.org/)
* NPM Package: [https://www.npmjs.com/package/redux](https://www.npmjs.com/package/redux)

**Installation:**

```bash
npm install redux
```

**2. React and Redux Integration**
React applications use Redux by wrapping the app with the `Provider` component to make the Redux store available throughout the component tree. Developers can then use `useSelector` to access state and `useDispatch` to dispatch actions.

**Resources:**

* React Redux Documentation: [https://react-redux.js.org/](https://react-redux.js.org/)
* NPM Package: [https://www.npmjs.com/package/react-redux](https://www.npmjs.com/package/react-redux)

**Installation:**

```bash
npm i react-redux
```

**3. Middleware in Redux**
Redux middleware provides a powerful way to extend Redux's abilities. Middleware sits between dispatching an action and the moment it reaches the reducer. This allows for handling side effects, logging, error reporting, etc.

**Common Middleware Use Cases:**

* Logging
* Async actions
* Error handling

**Popular Middleware Libraries:**

1. **Redux Thunk**

   * Allows action creators to return functions (useful for async logic like API calls).
   * Resource: [https://www.npmjs.com/package/redux-thunk](https://www.npmjs.com/package/redux-thunk)
   * Installation:

     ```bash
     npm i redux-thunk
     ```

2. **Redux Persist**

   * Persists the Redux state to local storage.

3. **Redux Saga**

   * Uses generators for complex asynchronous workflows.

4. **Redux Logger**

   * Logs actions and state changes for debugging.
   * Resource: [https://www.npmjs.com/package/redux-logger](https://www.npmjs.com/package/redux-logger)
   * Installation:

     ```bash
     npm i redux-logger
     ```

5. **Redux DevTools**

   * Allows inspecting actions and state with time-travel debugging.
   * Chrome Extension: [https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
   * NPM Package: [https://www.npmjs.com/package/@redux-devtools/extension](https://www.npmjs.com/package/@redux-devtools/extension)
   * Installation:

     ```bash
     npm i @redux-devtools/extension
     ```

6. **Redux Router**

   * Integrates React Router with Redux.

**4. Deprecated APIs and Toolkit Usage**
The traditional `createStore` method has been deprecated. Developers are encouraged to use `configureStore` from the official Redux Toolkit for easier and more efficient store setup.

**Resource:**

* Redux Toolkit: [https://www.npmjs.com/package/@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

**Installation:**

```bash
npm i @reduxjs/toolkit
```

**5. Redux vs Redux Toolkit: A Comparison**

| S.NO | Feature                 | Redux                                   | Redux Toolkit                             |
| ---- | ----------------------- | --------------------------------------- | ----------------------------------------- |
| 1    | Installation            | Manual setup required                   | Pre-configured setup via `configureStore` |
| 2    | Boilerplate Code        | More verbose (actions, reducers, types) | Less boilerplate with `createSlice`, etc. |
| 3    | Middleware Integration  | Manual                                  | Built-in middleware like thunk by default |
| 4    | DevTools Support        | Requires manual setup                   | DevTools integration included by default  |
| 5    | Code Organization       | More manual and separated               | Encourages modular and scalable structure |
| 6    | Learning Curve          | Steeper                                 | Easier for beginners                      |
| 7    | Official Recommendation | Older standard                          | Officially recommended for new projects   |
| 8    | Async Logic             | Manual setup with thunk or saga         | Built-in with thunk, extensible           |
| 9    | Store Configuration     | `createStore` (now deprecated)          | `configureStore`                          |
| 10   | Community Adoption      | Legacy projects                         | Modern standard                           |
