export const capitalize = (str: string) => {
	if(!strIsValid(str)) return str;

	return str.charAt(0).toUpperCase() + str.slice(1);
};


const strIsValid = (str: string) => {
	return typeof str === 'string' && str.length > 0;
};