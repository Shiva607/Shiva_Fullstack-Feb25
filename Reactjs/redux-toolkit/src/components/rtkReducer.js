//! Redux toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

//! Slice contains both Actions + Reducers
const counterSlice = createSlice({
	//! name property => Name of the reducer
	name: 'counter', // The name should exactly match in store
	initialState, // Initial value
	// Below are the Actions
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
	},
});

/* //! Default Middleware
The only one that is default available in Redux Toolkit is:
	* redux-thunk: This is included by default in Redux Toolkit via getDefaultMiddleware().

The following are not included by default we need add manually:
	* @redux-devtools/extension: Not included by default, but DevTools are still enabled automatically in development mode in Redux Toolkit.
	* redux-logger: Not included by default, must be added manually if you want logging middleware.
*/

//! Thunk function
export const incrementIfNotMax = () => {
	return (dispatch, getState) => {
		const state = getState();
		const count = state?.counter?.count; // Adjust path based on store setup

		console.log('Current state:', state);

		if (typeof count === 'number' && count < 5) {
			dispatch(increment());
		} else {
			console.log('You reached max count');
			alert('You reached max count');
		}
	};
};

console.log('Actions', counterSlice.actions);
console.log('Reducers', counterSlice.reducer);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
