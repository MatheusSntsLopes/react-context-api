import * as actionTypes from './action-types';
import { initialState } from '.';
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1, error: false };
    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1, error: false };
    case actionTypes.RESET:
      return { ...initialState, error: false };
    case actionTypes.SET_COUNTER:
      return { ...state, counter: action.payload };
    case actionTypes.ASYNC_INCREASE_START:
      return { ...state, loading: true, error: true };
    case actionTypes.ASYNC_INCREASE_END:
      return { ...state, loading: false, counter: state.counter + 1, error: true };
    case actionTypes.ASYNC_INCREASE_ERROR:
      return { ...state, loading: false, error: true };
    default:
  }

  return state;
};
