import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {counterReducer} from './reducers';

const rootReducer = combineReducers({
    form: formReducer,
    counter: counterReducer
});

export const store = createStore(
    rootReducer,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
