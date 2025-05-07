import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/rtkReducer';
import logger from 'redux-logger';

const store = configureStore({
	reducer: {
		//! Here counter is the reducer name configured in rtkReducer.js
		counter: counterReducer, // RTK slice reducer
	},
	/* 
	* getDefaultMiddleware is used in the configureStore() method from Redux Toolkit when you want to customize or extend the default middleware.
	* By default, configureStore() includes:
			1. redux-thunk
			2. Checks like serializableCheck and immutableCheck
	* If we want to add custom middleware (e.g., redux-logger), we need to use getDefaultMiddleware()
	 */
	//! concat function => Combines two or more arrays. This method returns a new array without modifying any existing arrays.
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //! For more understand Refer below
});

export default store;

/* //! Default Middleware
The only one that is default available in Redux Toolkit is:
	* redux-thunk: This is included by default in Redux Toolkit via getDefaultMiddleware().

The following are not included by default we need add manually:
	* @redux-devtools/extension: Not included by default, but DevTools are still enabled automatically in development mode in Redux Toolkit.
	* redux-logger: Not included by default, must be added manually if you want logging middleware.
*/

/* //! middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),                
 middleware: A key inside configureStore where you define custom middleware.
 (getDefaultMiddleware) =>: A function that receives Redux Toolkit’s built-in getDefaultMiddleware helper.
 getDefaultMiddleware(): Returns the default list of middleware, which includes:
							• redux-thunk
							• serializableCheck
							• immutableCheck
 .concat(logger): Adds your custom middleware (redux-logger) to the end of that default list.
*/

/* 
//! The package @redux-devtools/extension is not included by default in Redux Toolkit.

	* However, Redux Toolkit automatically integrates Redux DevTools in development mode, without needing @redux-devtools/extension or any additional setup.

	* If you want manual control or additional features for the DevTools, you can install @redux-devtools/extension as a separate package, but it is not required for most use cases with Redux Toolkit.

To Summarize:
	* Redux Toolkit: DevTools are enabled by default, no need for @redux-devtools/extension.
	* @redux-devtools/extension: Optional for advanced control or custom use cases.
*/
