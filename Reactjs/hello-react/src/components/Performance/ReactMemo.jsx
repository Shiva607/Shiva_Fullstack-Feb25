import React, { useState } from 'react';

//! Employee component with React.memo

// React.memo is a higher-order component that memoizes a functional component — it prevents unnecessary re-renders by reusing the last rendered output if the props haven't changed.

// If a parent component re-renders but the props passed to a React.memo-wrapped child haven’t changed, the child component will not re-render.

const Employee = React.memo(({ name }) => {
	console.log('Rendering Employee:', name);
	return <div>{name}</div>;
});

const ReactMemo = () => {
	const [employees] = useState(['John', 'Jane']);
	const [companyName, setCompanyName] = useState('ABC Corp');

	return (
		<div>
			<h2>Employee Management (React.memo Example)</h2>
			<h3>Company: {companyName}</h3>

			{employees.map((emp, index) => (
				<Employee key={index} name={emp} />
			))}

			<button onClick={() => setCompanyName('XYZ Ltd')}>Change Company Name</button>
		</div>
	);
};

export default ReactMemo;
