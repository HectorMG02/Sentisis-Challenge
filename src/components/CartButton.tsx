import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from '@mui/material';
const CartButton = () => {
	return (
		<>
			<Button
				variant="contained"
				color="primary"
				endIcon={<ShoppingCartCheckoutIcon />}
				onClick={() => console.log('dado')}
				sx={{
					position: 'fixed',
					bottom: '20px',
					right: '20px',
				}}
			>
				Checkout
			</Button>
		</>
	);
};

export default CartButton;