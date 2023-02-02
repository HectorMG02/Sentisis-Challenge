import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableComponent from '../Table/TableComponent';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { dateToDDMMYYYY } from '../../common/dateParser';

const tableData: TableDataInterface[] = [
	{
		id: '1',
		title: 'title1',
		type: 'type1',
		releaseDate: 1620000000000,
		description: 'description1',
		price: 1,
		currency: 'currency1',
	},
	{
		id: '2',
		title: 'title2',
		type: 'type2',
		releaseDate: 1620000000000,
		description: 'description2',
		price: 2,
		currency: 'currency2',
	},
];

describe('TableComponent tests', () => {
	describe('Layout', () => {
		test('has the tableData property', () => {
			const { container } = render(<TableComponent tableData={tableData} />);
			const tableRows = container.querySelectorAll('tr');
			expect(tableRows.length).toBe(tableData.length + 1); // +1 for the header

		});

		test('data has the correct format DD/MM/YYYY', () => {
			const { container } = render(<TableComponent tableData={tableData} />);
			const tableRows = container.querySelectorAll('tr');
			const tableRow = tableRows[1];

			const tableRowCells = tableRow.querySelectorAll('td');
			const tableRowCell = tableRowCells[1];

			const rightFormatDate = dateToDDMMYYYY(new Date(tableData[0].releaseDate));
			expect(tableRowCell.textContent).toBe(rightFormatDate);
		});
	});
});