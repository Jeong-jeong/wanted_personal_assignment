import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

// @NOTE: reducer를 하나로 합치는 역할
const RootReducer = combineReducers({ ProductReducer });

export default RootReducer;
