export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

//! Redux thunk
// Redux Thunk is a middleware for Redux that allows action creators to return a function, enabling asynchronous logic like API calls. It’s important for managing side effects and improving state management in our applications.

export const incrementIfNotMax = () => {
	return (dispatch, getState) => {
		const state = getState();

		// If state is undefined or null, then the line will not throw an error instead, it will safely assign undefined to count because of the optional chaining (?.) operator.
		const count = state?.count; // Optional chaining for safety

		console.log('Current state:', state);

		if (typeof count === 'number' && count < 5) {
			dispatch(increment());
		} else {
			console.log('You reached max count');
			alert('You reached max count');
		}
	};
};

//! OR
/* 
export const incrementIfNotMax = () => {
	return (dispatch, getState) => {
		const { count } = getState();

		console.log(getState());

		if (count < 10) {
			dispatch(increment());
		} else {
			console.log('You reached max count');
		}
	};
}; 
*/
