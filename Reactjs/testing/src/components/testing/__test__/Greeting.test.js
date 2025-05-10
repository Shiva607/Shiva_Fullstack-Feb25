import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Greeting from '../Greeting';
import '@testing-library/jest-dom'; // extends Jest with custom DOM matchers (like toBeInTheDocument, toHaveTextContent, etc.) to make React component tests more readable and expressive.

/* 
1. Use queryByText to check absence of an element.
2. Use findByText to wait for an element to appear.
3. Use getByText if you’re certain the element is already in the DOM.
*/

describe('Greeting tests', () => {
	test('Renders the initial greeting', () => {
		render(<Greeting />);
		// const greetingElement = screen.getByText('Hello, user!');
		//! The /i in the regular expression /Hello, user!/i is a flag that makes the regular expression case-insensitive.
		const greetingElement = screen.getByText(/hello, user!/i);
		expect(greetingElement).toBeInTheDocument();
	});

	test('Changes greeting message when button clicked - 1', () => {
		render(<Greeting />);
		const greetingElement = screen.getByText(/Change Greeting/i);
		fireEvent.click(greetingElement);
		const updatedMsg = screen.getByText(/Welcome, Guest!/i);

		expect(updatedMsg).toBeInTheDocument();
	});

	test('Changes greeting message when button clicked - 2', async () => {
		render(<Greeting />);
		const greetingElement = await screen.findByText(/Change Greeting/i);
		fireEvent.click(greetingElement);
		const updatedMsg = await screen.findByText(/Welcome, Guest!/i);

		expect(updatedMsg).toBeInTheDocument();
	});

	test('Changes greeting message when button clicked - 3', async () => {
		render(<Greeting />);

		//! Assert initial greeting
		const initialGreeting = screen.getByTestId('greeting-text');
		expect(initialGreeting).toHaveTextContent('Hello, User!');

		//! Click the button
		const button = screen.getByRole('button', { name: /change greeting/i });
		fireEvent.click(button);

		//! After clicking, we still use the same test ID to check updated text
		const updatedGreeting = screen.queryByTestId('greeting-text');
		expect(updatedGreeting).toHaveTextContent('Welcome, Guest!');
	});
});
