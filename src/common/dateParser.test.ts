import { dateToDDMMYYYY } from './dateParser';

describe('dateParser tests', () => {
	describe('dateToDDMMYYYY tests', () => {
		test('dateToDDMMYYYY should return 1/1/2020', () => {
			const date = new Date('2020-01-01');
			const result = dateToDDMMYYYY(date);
			expect(result).toBe('1/1/2020');
		});

		test('if date is undefined, dateToDDMMYYYY should return \'Invalid Date\'', () => {
			const date = undefined;
			const result = dateToDDMMYYYY(date);
			expect(result).toBe('Invalid Date');
		});

		test('if date is null, dateToDDMMYYYY should return \'Invalid Date\'', () => {
			const date = null;
			const result = dateToDDMMYYYY(date);
			expect(result).toBe('Invalid Date');
		});
	});
});