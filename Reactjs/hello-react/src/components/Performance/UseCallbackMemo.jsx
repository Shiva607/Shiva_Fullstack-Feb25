//! Using useCallback
import React, { useState, useCallback } from 'react';

//! Add employee button with React.memo
const AddEmployeeButton = React.memo(({ addEmployee }) => {
	console.log('Rendering AddEmployeeButton');
	return <button onClick={addEmployee}>Add Employee</button>;
});

const UseCallbackMemo = () => {
	const [employees, setEmployees] = useState(['John', 'Jane']);
	const [companyName, setCompanyName] = useState('ABC Corp');

	//! AddEmployee function using useCallback

	// useCallback memoizes a function, so if its dependencies don’t change, the same function instance is returned, preventing unnecessary re-renders or effects.

	// If a parent passes a callback to a child, wrapping the callback in useCallback ensures the child doesn't re-render unless the callback's dependencies change.

	const addEmployee = useCallback(() => {
		setEmployees((prev) => [...prev, 'New Employee']);
	}, []);

	return (
		<div>
			<h2>Employee Management (useCallback Example)</h2>
			<h3>Company: {companyName}</h3>

			<AddEmployeeButton addEmployee={addEmployee} />

			{employees.map((emp, index) => (
				<div key={index}>{emp}</div>
			))}

			<button onClick={() => setCompanyName('XYZ Ltd')}>Change Company Name</button>
		</div>
	);
};

export default UseCallbackMemo;
