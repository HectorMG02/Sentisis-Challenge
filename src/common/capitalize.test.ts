import { capitalize } from './capitalize';

describe('capitalize function tests', () => {
	it('should capitalize the first letter of a string', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});