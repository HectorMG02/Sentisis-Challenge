import { Dialog, DialogTitle, DialogContent, DialogContentText, List, Box, Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import { TableDataInterface } from '../../interfaces/TableData.interface';

const SummaryModalComponent = ({ open, handleClose, data}: { open: boolean, handleClose: () => void, data: TableDataInterface[]}) => {
	return (
		<Dialog
			onClose={handleClose}
			data-testid="modal"
			open={open}
			fullWidth
			maxWidth="sm"
		>
			<DialogTitle>
				Summary
				<hr />
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					<List sx={{ mt: -2 }} data-testid="modal-list">
						{
							data.map((item: TableDataInterface) => {
								return (
									<ListItem key={item.id}>
										<ListItemText primary={item.title} secondary={`Units: ${item.quantity} (x${item.price} ${item.currency})`} />
									</ListItem>
								);
							})
						}

						<ListItem>
							<ListItemText primary="Total" secondary={`${data.reduce((acc: number, item: TableDataInterface) => {
								return acc + (item.quantity * item.price);
							}, 0)} ${data[0].currency}`} />
						</ListItem>
					</List>


				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};


export default SummaryModalComponent;