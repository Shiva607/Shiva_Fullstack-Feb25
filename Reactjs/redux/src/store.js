import { applyMiddleware, createStore } from 'redux';
import reducer from './components/reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

const middleware = composeWithDevTools(applyMiddleware(thunk, logger));

//! createStore is @deprecated => We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
const store = createStore(reducer, middleware); //! Second parameter we called as enhancer

export default store;

/* 
//! Why not createStore(reducer, logger)?
Because logger is a middleware function, not a Redux store enhancer. createStore(reducer, logger) would not work as intended — it may throw an error or behave unpredictably.
*/

//! What is the difference in logs when using applyMiddleware(logger, thunk) vs applyMiddleware(thunk, logger) in Redux?
//1. When using logger before thunk, the logger tries to log the thunk (a function), which shows as undefined or a function in the logs before the real action happens.

//2. When using thunk before logger, the thunk handles the async function first and then sends the real action (like {type: 'INCREMENT'}) to the logger. So, the logger only logs clean, readable actions.

/* 
//! Why am I getting the error export 'default' (imported as 'thunk') was not found in 'redux-thunk' when importing thunk?

//1. This error occurs because Redux Thunk v3.0.0+ removed the default export in favor of named exports.
//2. import { thunk } from 'redux-thunk';  // ✅ Correct (named import)
//3. Why the Change?
    * Modern JavaScript/ES modules encourage named exports for better clarity.
    * Redux Thunk v3+ exports thunk and withExtraArgument as named exports only.
*/
