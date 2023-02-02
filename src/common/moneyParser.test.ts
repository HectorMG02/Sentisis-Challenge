import { moneyParser } from './moneyParser';

describe('moneyParser function tests', () => {
	it('should return a string with a comma in the right place', () => {
		expect(moneyParser(1000)).toBe('1,000.00');
	});

	it('if pass a string, should return the string', () => {
		expect(moneyParser('1000')).toBe('1000');
	});

	it('if pass empty string, should return empty string', () => {
		expect(moneyParser('')).toBe('');
	});
});