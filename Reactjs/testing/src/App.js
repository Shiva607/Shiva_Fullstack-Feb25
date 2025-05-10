import Greeting from './components/testing/Greeting';
import MyButton from './components/testing/MyButton';

function App() {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>React Testing</h1>
			<MyButton label="Click Me" />
			<Greeting />
		</div>
	);
}

export default App;
