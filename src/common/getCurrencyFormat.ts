export const getCurrencyFormat = (key: string): string => {
	const currencies = [
		{
			key: 'euro',
			symbol: '€',
		}
	];

	return currencies.find((currency) => currency.key === key)?.symbol || key;
};