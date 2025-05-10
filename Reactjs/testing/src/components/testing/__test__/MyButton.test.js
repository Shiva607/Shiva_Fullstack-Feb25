//! Creating snapshot test for MyButton component using react-test-renderer package

// react-test-renderer is deprecated  It’s better to use @testing-library/react for testing React components.
/* 
import renderer from 'react-test-renderer';
import MyButton from '../MyButton';

describe('button tests', () => {
	test('button test1', () => {
		const tree = renderer.create(<MyButton label="Submit Me" />).toJSON();
		console.log(tree);
		expect(tree).toMatchSnapshot();
	});
});
 */

//! Creating snapshot test for MyButton component using @testing-library/react package

import React from 'react';
import { render } from '@testing-library/react';
import MyButton from '../MyButton';
describe('button tests', () => {
	test('button test1', () => {
		// asFragment is a function returned as part of the object from the render() call in @testing-library/react so we need call this as object.

		const { asFragment } = render(<MyButton label="Click Me" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
