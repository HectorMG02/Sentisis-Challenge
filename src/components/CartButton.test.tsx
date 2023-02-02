import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import CartButton from './CartButton';
import '@testing-library/jest-dom';

describe('CartButton tests', () => {
	describe('Layout', () => {
		test('has the onClick property', () => {
			const onClick = vi.fn();
			const { getByTestId } = render(<CartButton onClick={onClick} />);

			const button = getByTestId('cart-button');
			fireEvent.click(button);

			expect(onClick).toHaveBeenCalled();
		});
	});
});