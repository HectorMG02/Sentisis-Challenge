import { Dispatch } from 'react';
import { TableDataInterface } from '../../interfaces/TableData.interface';
import { DataActionTypes, SAVE_DATA } from '../types';


export const saveData = (data: TableDataInterface[]) => (dispatch: Dispatch<DataActionTypes>) => {
	dispatch({
	  type: SAVE_DATA,
	  payload: data
	});
};
