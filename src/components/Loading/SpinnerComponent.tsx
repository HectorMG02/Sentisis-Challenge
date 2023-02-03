import { Box, LinearProgress } from '@mui/material';
import React from 'react';

const SpinnerComponent = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgress
				color="warning"
			/>
		</Box>
	);
};

export default SpinnerComponent;