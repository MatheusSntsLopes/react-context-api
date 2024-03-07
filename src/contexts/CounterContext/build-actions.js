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
  console.log(dispatch);
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => dispatch({ type: RESET }),
    setCounter: (payload) => dispatch({ type: SET_COUNTER, payload }),
    asyncIncreaseStart: () => asyncIncreaseFN(dispatch),
    asyncIncreaseEnd: () => dispatch({ type: ASYNC_INCREASE_END }),
    asyncIncreaseError: (error) => asyncErrorFN(dispatch, error),
  };
};

const asyncIncreaseFN = async (dispatch) => {
  dispatch({ type: ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: ASYNC_INCREASE_END });
      r('Resolved');
    }, 2000);
  });
};

const asyncErrorFN = async (dispatch) => {
  dispatch({ type: ASYNC_INCREASE_START });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: ASYNC_INCREASE_ERROR });
      reject('ERROR');
    }, 2000);
  });
};
