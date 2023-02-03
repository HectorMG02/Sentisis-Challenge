import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from '@mui/material';

type Props = {
	onClick: () => void
}

const CartButton: React.FC<Props> = ({ onClick }) => {
	return (
		<>
			<Button
				variant="contained"
				color="secondary"
				data-testid="cart-button"
				endIcon={<ShoppingCartCheckoutIcon />}
				onClick={onClick}
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