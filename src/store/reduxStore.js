import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { LoginReducer,CurrentDayReadingReducer } from '../reducer';

//for Only Development Version
let composeEnhancers = compose;
if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const appReducer = combineReducers({
	login: LoginReducer,
	form: formReducer,
	currentDayReading: CurrentDayReadingReducer
});

const stores = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
export default stores;
