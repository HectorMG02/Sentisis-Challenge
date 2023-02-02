import React from 'react';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';


const theme = createTheme({
	palette: {
		primary: {
			main: '#FDA47B',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#D9B5F6',
			contrastText: '#ffffff',
		},

	}
});

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: 'helvetica',
	},
}));


function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
