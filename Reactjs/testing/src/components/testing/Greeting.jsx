import React, { useState } from 'react';

export default function Greeting() {
	const [greeting, setGreeting] = useState('Hello, User!');

	return (
		<div>
			{
				// The data-testid attribute is used in testing to uniquely identify and reliably select elements in the DOM without relying on visible text or styles.
			}
			<h1 data-testid="greeting-text">{greeting}</h1>
			<button aria-label="Change Greeting" onClick={() => setGreeting('Welcome, Guest!')}>
				Change Greeting
			</button>
		</div>
	);
}
