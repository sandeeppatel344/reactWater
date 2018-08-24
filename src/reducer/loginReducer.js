import { DO_LOGIN, FAIL_LOGIN } from "../actions/actionTypes";
let INITIAL_STATE = {
  data: null
};
export const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DO_LOGIN:
    case FAIL_LOGIN:
      return { ...state, data: action.payload };

    default: {
      return state;
    }
  }
};
