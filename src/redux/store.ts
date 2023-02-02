import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {};
const middleware = [thunk];

const authPersistConfig = {
	key: 'data',
	storage: storage,
};


export type RootState = ReturnType<typeof rootReducer>;



export default function generateStore() {
	const store = createStore(
		persistReducer(authPersistConfig, rootReducer),
		initialState,
		applyMiddleware(...middleware)
	);

	const persistor = persistStore(store);

	return {store, persistor};
}