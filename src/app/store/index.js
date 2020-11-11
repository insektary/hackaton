import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {requestReducer} from './reducers';

const rootReducer = combineReducers({
    form: formReducer,
    requests: requestReducer
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        // eslint-disable-next-line
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
