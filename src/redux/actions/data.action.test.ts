import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { SAVE_DATA } from '../types';
import { saveData } from './data.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
	}
];

describe('data.action tests', () => {
	let store: any;

	beforeEach(() => {
		store = mockStore({ data: [] });
	});

	test('throws the action SAVE_DATA with the payload', async () => {
		await store.dispatch(saveData(tableData));

		const actions = store.getActions();
		expect(actions[0].type).toEqual(SAVE_DATA);
	});
});