import { capitalize } from './capitalize';

describe('capitalize function tests', () => {
	it('should capitalize the first letter of a string', () => {
		expect(capitalize('hello')).toBe('Hello');
	});

	it('should return an empty string if the input is an empty string', () => {
		expect(capitalize('')).toBe('');
	});

	it('should return an empty string if the input is not a string', () => {
		expect(capitalize(123)).toBe(123);
	});
});