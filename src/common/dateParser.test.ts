import { dateToDDMMYYYY } from './dateParser';

describe('dateToDDMMYYYY tests', () => {
	test('dateToDDMMYYYY should return 1/1/2020', () => {
		const date = new Date('2020-01-01');
		const result = dateToDDMMYYYY(date);
		expect(result).toBe('1/1/2020');
	});
});