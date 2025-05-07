//! Redux toolkit
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementIfNotMax } from './rtkReducer';

export default function RTKCounter() {
	const count = useSelector((state) => state.counter?.count);
	const dispatch = useDispatch();

	return (
		<div>
			<h3>Counter Demo using Redux Toolkit</h3>
			<button onClick={() => dispatch(decrement())}>-</button>
			&nbsp;&nbsp;
			{count}
			&nbsp;&nbsp;
			{/* <button onClick={() => dispatch(increment())}>+</button> */}
			<button onClick={() => dispatch(incrementIfNotMax())}>+</button>
		</div>
	);
}
