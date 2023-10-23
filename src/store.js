import { createStore, combineReducers } from 'redux';
import carReducer from './reducers/carReducer';

const rootReducer = combineReducers({
  car: carReducer,
});

const store = createStore(rootReducer);

export default store;
