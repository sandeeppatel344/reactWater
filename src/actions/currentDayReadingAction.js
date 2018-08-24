import { CURRENT_DAY_READING } from './actionTypes';

export const CurrentDayCharges = (value) => {
	return function(dispatch) {
		dispatch({
			type: CURRENT_DAY_READING,
			payload: value
		});
	};
};
