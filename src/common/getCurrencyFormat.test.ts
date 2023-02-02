import { getCurrencyFormat } from './getCurrencyFormat';

describe('getCurrencyFormat function tests', () => {
	test('if pass an existing key has to return the symbol', () => {
		const result = getCurrencyFormat('euro');
		expect(result).toBe('€');
	});

	test('if pass a non existing key has to return the key', () => {
		const result = getCurrencyFormat('dollar');
		expect(result).toBe('dollar');
	});

	test('if pass an empty key has to return the key', () => {
		const result = getCurrencyFormat('');
		expect(result).toBe('');
	});

	test('if pass an undefined key has to return the key', () => {
		const result = getCurrencyFormat(undefined);
		expect(result).toBe(undefined);
	});
});