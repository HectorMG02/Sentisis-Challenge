import React from 'react';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';



const theme = createTheme({
	palette: {
		primary: {
			// blue
			main: '#FDA47B',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#D9B5F6',
			contrastText: '#ffffff',
		},

	}
});


function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
