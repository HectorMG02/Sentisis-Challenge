import React from 'react';
import './App.css';
import Home from './pages/Home';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
	root: {
		fontFamily: 'sans-serif',
		'& .MuiButton-containedPrimary': {
			backgroundColor: '#D9B5F6',
			color: 'white',
			'&:hover': {
				backgroundColor: '#F4F5F9',
				color: '#D9B5F6',
			}
		},
		'& .MuiButton-containedSecondary': {
			backgroundColor: '#FDA47B',
			color: 'white',
			'&:hover': {
				backgroundColor: '#F4F5F9',
				color: '#FDA47B',
			}
		},
	},

}));


function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Home />
		</div>
	);
}

export default App;
