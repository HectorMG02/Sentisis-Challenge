export const moneyParser = (money: number) => {
	if(!moneyIsValid(money)) return money;

	return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const moneyIsValid = (money: number) => {
	return typeof money === 'number' && money >= 0;
};