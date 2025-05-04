import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { combineReducers, createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

//! Example 1:
/* 
function reducer1(state = 0, action) {
	if (action.type === 'INCREMENT') {
		return (state += 1);
	} else if (action.type === 'DECREMENT') {
		return (state -= 1);
	}
	return state;
}

let store = createStore(reducer1);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); 
*/

//! Example 2:
/* 
function reducer2(state = { name: 'Bala' }, action) {
	if (action.type === 'CHANGE_NAME') {
		return { name: action.name };
	} else if (action.type === 'RESET_NAME') {
		return { name: 'bala' };
	}
	return state;
}

let store = createStore(reducer2);

console.log(store.getState());

store.dispatch({ type: 'CHANGE_NAME', name: 'Shiva' });
console.log(store.getState());

store.dispatch({ type: 'RESET_NAME' });
console.log(store.getState());
 */

//! Example 3: Combine two reducer into one reducer using normal functions
/* 
function reducer1(state = 0, action) {
	if (action.type === 'INCREMENT') {
		return (state += 1);
	} else if (action.type === 'DECREMENT') {
		return (state -= 1);
	}
	return state;
}

function reducer2(state = { name: 'Bala' }, action) {
	if (action.type === 'CHANGE_NAME') {
		return { name: action.name };
	} else if (action.type === 'RESET_NAME') {
		return { name: 'bala' };
	}
	return state;
}

function reducer(state = {}, action) {
	////1. If state is undefined, it defaults to an empty object {} on the first run (Redux does this to initialize the state).
	////2. Passing state.re1 (which is undefined on the first run).
	////3. If state is undefined reducer1 manages a numeric counter, so it uses its default of 0.
	console.log(state.re1); // Output => undefined
	console.log(state.re2); // Output => undefined

	// {
	//// re1: 0,  // Default value set by reducer1 (if no state passed)
	//// re2: { name: 'Bala' }  // Default value set by reducer2 (if no state passed)
	//// }

	return {
		re1: reducer1(state.re1, action),
		re2: reducer2(state.re2, action),
	};
}

let store = createStore(reducer);

console.log(store.getState().re1);
console.log(store.getState().re2.name);

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState().re1);
console.log(store.getState().re2.name);

store.dispatch({ type: 'CHANGE_NAME', name: 'Shiva' });
console.log(store.getState().re1);
console.log(store.getState().re2.name);

store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'RESET_NAME' });

console.log(store.getState().re1);
console.log(store.getState().re2.name);
*/

//! Example 4: Combine two reducer into one reducer using combineReducers functions
/* 
function reducer1(state = 0, action) {
	if (action.type === 'INCREMENT') {
		return (state += 1);
	} else if (action.type === 'DECREMENT') {
		return (state -= 1);
	}
	return state;
}

function reducer2(state = { name: 'Bala' }, action) {
	if (action.type === 'CHANGE_NAME') {
		return { name: action.name };
	} else if (action.type === 'RESET_NAME') {
		return { name: 'bala' };
	}
	return state;
}

let reducer = combineReducers({
	re1: reducer1,
	re2: reducer2,
});

let store = createStore(reducer);

console.log(store.getState().re1);
console.log(store.getState().re2.name);

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState().re1);
console.log(store.getState().re2.name);

store.dispatch({ type: 'CHANGE_NAME', name: 'Shiva' });
console.log(store.getState().re1);
console.log(store.getState().re2.name);

store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'RESET_NAME' });

console.log(store.getState().re1);
console.log(store.getState().re2.name); 
*/
