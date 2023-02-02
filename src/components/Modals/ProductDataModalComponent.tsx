import React from 'react';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { Badge, Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDataModalComponent = ({ open, handleClose, data, handleSelectModalUnit}: { open: boolean, handleClose: () => void, data: TableDataInterface, handleSelectModalUnit: (id: string) => void}) => {

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			fullWidth
			maxWidth="sm"
			data-testid="modal"
		>
			<DialogTitle data-testid="modal-title">
				{data.title}
				<span
					style={{
						float: 'right',
						fontSize: '0.8rem',
						fontWeight: 'bold',
					}}
					data-testid="modal-quantity"
				>
                    (x {data.quantity})
				</span>
				<br/>
				<Badge
					data-testid="modal-type"
					badgeContent={data.type}
					color="success"
					sx={{
						ml: 2,
					}}
				/>
			</DialogTitle>
			<DialogContent>

				<DialogContentText
					data-testid="modal-description"
				>
					{data.description}
				</DialogContentText>
			</DialogContent>

			<DialogContent>
				<Button
					variant="contained"
					color="warning"
					data-testid="add-unit-button"
					startIcon={<AddShoppingCartIcon />}
					sx={{
						float: 'right',
					}}
					onClick={() => handleSelectModalUnit(data.id)}
				>
                    Add unit
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default ProductDataModalComponent;
