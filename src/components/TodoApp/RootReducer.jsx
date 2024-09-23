import {combineReducers} from 'redux';
import counterReducer from './Reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;