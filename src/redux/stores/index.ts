import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from '@redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootReducerType = ReturnType<typeof RootReducer>;

export default store;
