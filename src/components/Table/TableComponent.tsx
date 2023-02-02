import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dateToDDMMYYYY } from '../../common/dateParser';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import propTypes from 'prop-types';
import UnitSelector from './UnitSelector';
import { Button, capitalize } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getCurrencyFormat } from '../../common/getCurrencyFormat';

const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#DC825D',
		color: '#ffff',
		fontWeight: 'bold',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: '#F4F5F9',
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));


export default function TableComponent({ tableData, handleUnitChange, selectDataFunction }: { tableData: TableDataInterface[], handleUnitChange: (value: number, id: string) => void, selectDataFunction: (id: string) => void }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="left">Name</StyledTableCell>
						<StyledTableCell align="left">Type</StyledTableCell>
						<StyledTableCell align="left">Release Date</StyledTableCell>
						<StyledTableCell align="left">Unit Selector</StyledTableCell>
						<StyledTableCell align="left">Price</StyledTableCell>
						<StyledTableCell align="left"></StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						tableData?.map(({ id, title, type, releaseDate, quantity, price, currency}: TableDataInterface) => (
							<StyledTableRow key={id}>
								<StyledTableCell component="th" scope="row" align="left" sx={{
									fontWeight: 'bold',
								}}>
									{capitalize(title)}
								</StyledTableCell>
								<StyledTableCell align="left">{capitalize(type)}</StyledTableCell>
								<StyledTableCell align="left">
									{
										dateToDDMMYYYY(new Date(releaseDate))
									}
								</StyledTableCell>
								<StyledTableCell align="left">
									<UnitSelector value={quantity || 0} handleUnitChange={handleUnitChange} cellId={id} />
								</StyledTableCell>
								<StyledTableCell align="left">{ price }{getCurrencyFormat(currency)}</StyledTableCell>
								<StyledTableCell align="left">
									<Button
										variant="contained"
										color='primary'
										startIcon={
											<VisibilityIcon sx={{
												ml: 1.5
											}}
											/>
										}
										onClick={() => selectDataFunction(id)}
									/>
								</StyledTableCell>
							</StyledTableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

TableComponent.propTypes = {
	tableData: propTypes.array.isRequired,
	handleUnitChange: propTypes.func.isRequired
};