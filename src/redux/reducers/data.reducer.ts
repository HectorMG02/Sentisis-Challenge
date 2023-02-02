import { SAVE_DATA } from '../types';

const initialState = {
	data: []
};

const dataReducer = (state = initialState, action: any) => {
	switch(action.type) {
	case SAVE_DATA:
		return {
			...state,
			data: action.payload
		};

	default:
		return state;
	}
};

export default dataReducer;