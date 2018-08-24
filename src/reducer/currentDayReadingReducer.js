import { CURRENT_DAY_READING } from '../actions/actionTypes';
let INITIAL_STATE = {
	date: '',
	reading: '',
	charges: '',
	daily_consumption: '',
	atual_consumption: ''
};
export const CurrentDayReadingReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CURRENT_DAY_READING:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
