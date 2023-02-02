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
		>
			<DialogTitle>
				{data.title}
				<span
					style={{
						float: 'right',
						fontSize: '0.8rem',
						fontWeight: 'bold',
					}}
				>
                    (x {data.quantity})
				</span>
				<br/>
				<Badge
					data-testid="badge"
					badgeContent={data.type}
					color="success"
					sx={{
						ml: 2,
					}}
				/>
			</DialogTitle>
			<DialogContent>

				<DialogContentText id="alert-dialog-description">
					{data.description}
				</DialogContentText>
			</DialogContent>

			<DialogContent>
				<Button
					variant="contained"
					color="warning"
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
