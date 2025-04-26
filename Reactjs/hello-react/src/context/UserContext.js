import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');

	const login = (name) => {
		setIsLoggedIn(true);
		setUserName(name);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setUserName('');
	};

	return (
		<UserContext.Provider value={{ isLoggedIn, userName, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
