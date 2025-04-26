import React, { useState } from 'react';
import Product from './components/Product.jsx';
import InputField from './components/InputField.jsx';
import FetchData from './components/FetchData.jsx';
import ConditionalFetchData from './components/ConditionalFetchData.jsx';
import MountVsUnmount from './components/MountVsUnmount';
import LoginForm from './components/context/LoginForm.jsx';
import Dashboard from './components/context/Dashboard.jsx';
import { UserProvider } from './context/UserContext';

function App() {
	const [show, setShow] = useState(true);
	const [status, setStatus] = useState('Mounted');

	const productInfo = {
		productName: 'Apple',
		ProductPrice: 300,
	};

	return (
		<div style={{ textAlign: 'center' }}>
			{/* //! Are the components inside <UserProvider> passed as props, and is children just a special prop for those components? 
		
			//! ✅ What is children in React?
			// In React, anything you put between the opening and closing tags of a component is automatically passed as a special prop called children

			// Here, LoginForm and Dashboard are not passed like normal props (e.g., userName="John"), but they are still passed — as the content inside the UserProvider tag.
			
			// ! So React does this under the hood:
			// UserProvider({ children: [<LoginForm />, <Dashboard />] })

			//! ✅ So YES, it's a prop
			//1. It's a special prop, not passed like other props (as attributes), but still a prop.
			//2. React passes it for you automatically based on what you include inside the component.

			// !  Item 								| Passed As 	| Notes
			// 1. userName="John" 						| normal prop 	| Explicit
			// 2. <LoginForm /> inside <UserProvider> 	| children prop | Implicit (React handles it)
			// 
			*/}
			<UserProvider>
				<div>
					<LoginForm />
					<Dashboard />
				</div>
			</UserProvider>
			<br />
			<hr />
			<Product productDetails={productInfo}></Product>
			<br />
			<hr />
			<InputField />
			<br />
			<hr />
			<FetchData />
			<br />
			<hr />
			<ConditionalFetchData />
			<br />
			<hr />

			<h1>Mount Vs Unmount</h1>
			<button onClick={() => setShow(!show)}>Toggle Child</button>
			<h3>Status: {status}</h3>
			{/* 
			//! If show is true, 
				// 1. the second part (<MountVsUnmount ... />) will be executed/rendered.
				// 2. The MountVsUnmount component is mounted (added to DOM).
			
			//! If show is false, 
				// 1. Nothing will be rendered — the component is removed from the DOM.
				// 2. The MountVsUnmount component is unmounted (removed from DOM). 	
			*/}
			{show && <MountVsUnmount setStatus={setStatus} />}
			<br />
			<hr />
		</div>
	);
}

export default App;
