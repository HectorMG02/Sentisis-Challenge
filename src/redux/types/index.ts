import { TableDataInterface } from '../../interfaces/TableData.interface';

export const SAVE_DATA = 'SAVE_DATA';

export interface SaveDataAction {
    type: typeof SAVE_DATA;
    payload: TableDataInterface[];
}

export type DataActionTypes = SaveDataAction;
