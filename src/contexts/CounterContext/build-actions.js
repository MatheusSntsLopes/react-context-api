import {
  ASYNC_INCREASE_END,
  ASYNC_INCREASE_ERROR,
  ASYNC_INCREASE_START,
  DECREASE,
  INCREASE,
  RESET,
  SET_COUNTER,
} from './action-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => dispatch({ type: RESET }),
    setCounter: (counter) => dispatch({ type: SET_COUNTER, counter }),
    asyncIncreaseStart: () => dispatch({ type: ASYNC_INCREASE_START }),
    asyncIncreaseEnd: () => dispatch({ type: ASYNC_INCREASE_END }),
    asyncIncreaseError: (error) => dispatch({ type: ASYNC_INCREASE_ERROR, error }),
  };
};
