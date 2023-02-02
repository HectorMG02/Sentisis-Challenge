import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnitSelector from './UnitSelector';
import { vi } from 'vitest';


describe('UnitSelector tests', () => {
	let handleUnitChange: (value: number, id: string) => void;
	const value = 10;
	const cellId = '1a';
	let component: ReturnType<typeof render>;

	beforeAll(() => {
		handleUnitChange = vi.fn((value: number, id: string) => {
			if (value < 0) {
				return false;
			}
		});

		component = render(
			<UnitSelector
				value={value}
				handleUnitChange={handleUnitChange}
				cellId={cellId}
			/>
		);
	});


	describe('Layout', () => {
		test('renders the correct number of units', () => {
			const { getByTestId } = component;

			const unitSelector = getByTestId(`unit-selector-${cellId}`);
			const inputElement = unitSelector.querySelector('input');
			expect(Number(inputElement?.value)).toBe(value);
		});
	});


	describe('Functionality', () => {
		test('calls handleUnitChange when plus button is clicked', () => {
			const { getByTestId } = component;

			const plusButton = getByTestId(`increase-button-${cellId}`);
			fireEvent.click(plusButton);

			expect(handleUnitChange).toHaveBeenCalledWith(value + 1, cellId);
		});


		test('calls handleUnitChange when minus button is clicked', () => {
			const { getByTestId } = component;

			const minusButton = getByTestId(`decrease-button-${cellId}`);
			fireEvent.click(minusButton);

			expect(handleUnitChange).toHaveBeenCalledWith(value - 1, cellId);
		});

		test('handleUnitChange does nothing when minus button is clicked and value is 0', () => {
			const { getByTestId } = component;

			const minusButton = getByTestId(`decrease-button-${cellId}`);
			fireEvent.click(minusButton);

			const result = handleUnitChange(0 - 1, cellId);
			expect(result).toBe(false);
		});
	});

});