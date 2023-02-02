import React from 'react';
import { render } from '@testing-library/react';
import ProductDataModalComponent from './ProductDataModalComponent';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

describe('ProductDataModalComponent tests', () => {
	let component: ReturnType<typeof render>;
	const handleSelectModalUnit = vi.fn();
	const data: TableDataInterface = {
		id: '1',
		title: 'Test Title',
		type: 'Test Type',
		description: 'Test Description',
		quantity: 2,
		releaseDate: 123456789,
		price: 100,
		currency: 'euro'
	};


	beforeAll(() => {
		component = render(
			<ProductDataModalComponent
				open
				handleClose={vi.fn()}
				data={data}
				handleSelectModalUnit={handleSelectModalUnit}
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

			const modal = getByTestId('modal');
			const title = getByTestId('modal-title');
			const type = getByTestId('modal-type');
			const description = getByTestId('modal-description');
			const quantity = getByTestId('modal-quantity');

			expect(modal).toBeInTheDocument();
			expect(title).toHaveTextContent(data.title);
			expect(type).toHaveTextContent(data.type);
			expect(description).toHaveTextContent(data.description);
			expect(quantity).toHaveTextContent(data?.quantity.toString());
		});

	});

	describe('Functionality', () => {
		test('has handleSelectModalUniti is called after press add unit button', () => {
			const { getByTestId } = component;

			const button = getByTestId('add-unit-button');
			button.click();

			expect(handleSelectModalUnit).toHaveBeenCalledWith(data.id);
		});

	});
});
