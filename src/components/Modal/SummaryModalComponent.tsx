import { Dialog, DialogTitle, DialogContent, DialogContentText, List, ListItem, ListItemText, capitalize, styled } from '@mui/material';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { getCurrencyFormat } from '../../common/getCurrencyFormat';
import { moneyParser } from '../../common/moneyParser';

const StyledSpan = styled('span')({
	fontWeight: 'bold',
});

type Props = {
	open: boolean,
	handleClose: () => void,
	data: TableDataInterface[]
}

const SummaryModalComponent: React.FC<Props> = ({ open, handleClose, data}) => {
	const totalMoney = moneyParser(data.reduce((acc: number, item: TableDataInterface) => {
		return acc + (item.quantity * item.price);
	}, 0));

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
									<ListItem key={item.id}>
										<ListItemText primary={capitalize(item.title)} secondary={
											<>
												<StyledSpan>Units: </StyledSpan>
												{item.quantity} (x{item.price}{getCurrencyFormat(item.currency)})
											</>
										} />
									</ListItem>
								);
							})
						}

						<ListItem>
							<ListItemText primary={<StyledSpan>Total</StyledSpan>} secondary={
								<StyledSpan>
									{`${totalMoney}${getCurrencyFormat(data[0].currency)}`}
								</StyledSpan>
							}
							/>
						</ListItem>
					</List>


				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};


export default SummaryModalComponent;
