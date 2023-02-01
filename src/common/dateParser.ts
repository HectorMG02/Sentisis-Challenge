export const dateToDDMMYYYY = (date: Date) => {
	if (!date) {
		return 'Invalid Date';
	}

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}/${month}/${year}`;
};
