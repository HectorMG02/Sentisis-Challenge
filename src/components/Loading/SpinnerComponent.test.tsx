import React from 'react';
import { render } from '@testing-library/react';
import SpinnerComponent from './SpinnerComponent';
import '@testing-library/jest-dom';


describe('SpinnerComponent', () => {
	it('renders a loading spinner', () => {
		const { getByRole } = render(<SpinnerComponent />);
		const spinner = getByRole('progressbar');
		expect(spinner).toBeInTheDocument();
	});
});
