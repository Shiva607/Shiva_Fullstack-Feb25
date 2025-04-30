//! Using useMemo
import React, { useState, useMemo } from 'react';

const UseMemo = () => {
	const [employees, setEmployees] = useState(['John', 'Jane']);
	const [companyName, setCompanyName] = useState('ABC Corp');

	//! Memoize total employee count using useMemo

	// If a component does heavy calculations, useMemo memoizes the result so it recomputes only when dependencies change, improving performance.

	// If a component calculates a filtered list from a large array, wrapping it in useMemo ensures the list is only recalculated when the array or filter changes, not on every render.

	const totalEmployees = useMemo(() => {
		console.log('Calculating total employees...');
		return employees.length;
	}, [employees]);

	const addEmployee = () => {
		// if(employees.length>5){
		//     return
		// }
		setEmployees((prev) => [...prev, 'New Employee']);
	};

	return (
		<div>
			<h2>Employee Management (useMemo Example)</h2>
			<h3>Company: {companyName}</h3>

			<button onClick={addEmployee}>Add Employee</button>

			<h4>Total Employees: {totalEmployees}</h4>

			{employees.map((emp, index) => (
				<div key={index}>{emp}</div>
			))}

			<button onClick={() => setCompanyName('XYZ Ltd')}>Change Company Name</button>
		</div>
	);
};

export default UseMemo;
