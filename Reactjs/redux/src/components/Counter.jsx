import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementIfNotMax } from './action';

export default function Counter() {
	// const count = useSelector(state); // Output for state => {count: 0}
	// OR
	const count = useSelector((state) => state.count); // Output for state => 0
	const dispatch = useDispatch();

	return (
		<div>
			<h3>Counter Demo using Redux</h3>
			<button onClick={() => dispatch(decrement())}>-</button>
			&nbsp;&nbsp;
			{count}
			&nbsp;&nbsp;
			{/* <button onClick={() => dispatch(increment())}>+</button> */}
			{/* //! Redux thunk */}
			<button onClick={() => dispatch(incrementIfNotMax())}>+</button>
		</div>
	);
}
