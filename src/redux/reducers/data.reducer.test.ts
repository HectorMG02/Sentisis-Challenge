import { TableDataInterface } from '../../interfaces/TableData.interface';
import { SAVE_DATA } from '../types';
import dataReducer from './data.reducer';

const initialState = {
	data: [],
};

const tableData: TableDataInterface[] = [
	{
		id: '1',
		title: 'title1',
		type: 'type1',
		releaseDate: 1620000000000,
		description: 'description1',
		price: 1,
		currency: 'currency1',
		quantity: 0,
	},
	{
		id: '2',
		title: 'title2',
		type: 'type2',
		releaseDate: 1620000000000,
		description: 'description2',
		price: 2,
		currency: 'currency2',
		quantity: 0,
	},
];

describe('data.reducer tests', () => {
	test('when called SAVE_DATA action it should add the data to the state', () => {
		expect(dataReducer(initialState, {
			type: SAVE_DATA,
			payload: tableData
		})).toEqual({
			...initialState,
			data: tableData
		});
	});
});