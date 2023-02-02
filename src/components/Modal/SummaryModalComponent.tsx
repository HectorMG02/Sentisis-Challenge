import { Dialog, DialogTitle, DialogContent, DialogContentText, List, ListItem, ListItemText, capitalize } from '@mui/material';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { getCurrencyFormat } from '../../common/getCurrencyFormat';
import { Fragment } from 'react';
import { moneyParser } from '../../common/moneyParser';

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
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					<List sx={{ mt: -2 }} data-testid="modal-list">
						{
							data.map((item: TableDataInterface) => {
								return (
									<Fragment key={item.id}>
										<ListItem>
											<ListItemText primary={capitalize(item.title)} secondary={`Units: ${item.quantity} (x${item.price}${getCurrencyFormat(item.currency)})`} />
										</ListItem>
										<hr />
									</Fragment>
								);
							})
						}

						<ListItem>
							<ListItemText primary={<span style={{
								fontWeight: 'bold',
							}}>Total</span>} secondary={<span style={{
								fontWeight: 'bold',
							}}>
								{
									moneyParser(data.reduce((acc: number, item: TableDataInterface) => {
										return acc + (item.quantity * item.price);
									}, 0))
								}{getCurrencyFormat(data[0].currency)}</span>}
							/>
						</ListItem>
					</List>


				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};


export default SummaryModalComponent;