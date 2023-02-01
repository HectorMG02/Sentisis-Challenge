import React, { useState } from 'react';
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

interface Ticket {
  name: string;
  type: string;
  releaseDate: string;
  price: number;
  units: number;
}

const Home: React.FC = () => {
	const classes = useStyles();
	const [tickets, setTickets] = useState<Ticket[]>([]);
	const [selectedUnits, setSelectedUnits] = useState<{ [key: string]: number }>({});

	const handleUnitChange = (ticket: Ticket, units: number) => {
		setSelectedUnits({
			...selectedUnits,
			[ticket.name]: units,
		});
	};

	return (
		<Table className={classes.table}>
			<TableHead>
				<TableRow>
					<TableCell>Name</TableCell>
					<TableCell>Type</TableCell>
					<TableCell>Release Date</TableCell>
					<TableCell>Unit Selector</TableCell>
					<TableCell>Price</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{tickets
					.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
					.map((ticket) => (
						<TableRow key={ticket.name}>
							<TableCell>{ticket.name}</TableCell>
							<TableCell>{ticket.type}</TableCell>
							<TableCell>{ticket.releaseDate}</TableCell>
							<TableCell>
								<Button onClick={() => handleUnitChange(ticket, selectedUnits[ticket.name] - 1)}>-</Button>
								<TextField
									type="number"
									value={selectedUnits[ticket.name] || 0}
									onChange={(event) => handleUnitChange(ticket, Number(event.target.value))}
								/>
								<Button onClick={() => handleUnitChange(ticket, selectedUnits[ticket.name] + 1)}>+</Button>
							</TableCell>
							<TableCell>{ticket.price}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
};

export default Home;
