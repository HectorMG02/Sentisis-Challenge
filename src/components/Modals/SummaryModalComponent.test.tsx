import React from 'react';
import { render } from '@testing-library/react';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import SummaryModalComponent from './SummaryModalComponent';




describe('ProductDataModalComponent tests', () => {
	let component: ReturnType<typeof render>;
	const data: TableDataInterface[] = [
		{
			id: '1',
			title: 'Test Title',
			type: 'Test Type',
			description: 'Test Description',
			quantity: 2,
			releaseDate: 123456789,
			price: 100,
			currency: 'euro'
		},
		{
			id: '2',
			title: 'Test Title 2',
			type: 'Test Type 2',
			description: 'Test Description 2',
			quantity: 3,
			releaseDate: 123456789,
			price: 100,
			currency: 'euro'
		}
	];


	beforeAll(() => {
		component = render(
			<SummaryModalComponent
				open
				handleClose={vi.fn()}
				data={data}
			/>
		);
	});

	describe('Layout', () => {
		test('has open property', () => {
			const { getByTestId } = component;

			const modal = getByTestId('modal');
			expect(modal).toBeInTheDocument();
		});


		test('has data property', () => {
			const { getByTestId } = component;
			const modalList = getByTestId('modal-list');

			expect(modalList.children.length).toBe(data.length + 1);
		});


		test('the last item in the list is the total', () => {
			const { getByTestId } = component;
			const modalList = getByTestId('modal-list');

			const totalLine = modalList.children[modalList.children.length - 1];

			const totalValue = data.reduce((acc: number, item: TableDataInterface) => {
				return acc + (item?.quantity * item.price);
			}, 0);

			expect(totalLine.children[0]).toHaveTextContent(String(totalValue));
		});

	});

});
