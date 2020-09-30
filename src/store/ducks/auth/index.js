import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signInRequest: [''],
});

const INITIAL_STATE = {
  signed: true,
};

const loginSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: loginSuccess,
});
