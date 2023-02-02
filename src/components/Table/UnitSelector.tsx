import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	  alignItems: 'center'
	},
	input: {
		width: 80,
	},
	icon: {
		padding: 10,
		'&:hover': {
			backgroundColor: 'transparent'
		}
	}
}));


function UnitSelector({ value, handleUnitChange, cellId } : { value: number, handleUnitChange: (value: number, id: string) => void, cellId: string }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={1} alignItems="center">
				<Grid item>
					<IconButton
						aria-label="minus"
						className={classes.icon}
						onClick={() => handleUnitChange(value - 1, cellId)}
					>
						-
					</IconButton>
				</Grid>
				<Grid item>
					<TextField
						id="standard-number"
						type="number"
						value={value}
						className={classes.input}
						inputProps={{ style: { textAlign: 'center', color: 'black' } }}
						disabled
					/>
				</Grid>
				<Grid item>
					<IconButton
						aria-label="plus"
						className={classes.icon}
						onClick={() => handleUnitChange(value + 1, cellId)}
					>
						+
					</IconButton>
				</Grid>
			</Grid>
		</div>
	);
}

export default UnitSelector;

UnitSelector.propTypes = {
	value: propTypes.number.isRequired,
	handleUnitChange: propTypes.func.isRequired,
	cellId: propTypes.string.isRequired
};