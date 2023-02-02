import { Dialog, DialogTitle, DialogContent, DialogContentText, List, ListItem, ListItemText, capitalize } from '@mui/material';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { getCurrencyFormat } from '../../common/getCurrencyFormat';

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
										<ListItemText primary={capitalize(item.title)} secondary={`Units: ${item.quantity} (x${item.price}${getCurrencyFormat(item.currency)})`} />
									</ListItem>
								);
							})
						}

						<ListItem>
							<ListItemText primary="Total" secondary={`${data.reduce((acc: number, item: TableDataInterface) => {
								return acc + (item.quantity * item.price);
							}, 0)}${getCurrencyFormat(data[0].currency)}`}
							/>
						</ListItem>
					</List>


				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};


export default SummaryModalComponent;