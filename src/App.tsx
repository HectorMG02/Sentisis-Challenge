import { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<Button variant="contained">Hello World</Button>
			</div>
		</div>
	);
}

export default App;
