import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signInRequest: ['data'],
  signOut: [],
});

const INITIAL_STATE = {
  signed: true,
  name: '',
};

const loginSuccess = (_state = INITIAL_STATE, { data }) => {
  return {
    signed: true,
    name: data,
  };
};

const signOut = (_state = INITIAL_STATE) => {
  return {
    signed: false,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: loginSuccess,
  [Types.SIGN_OUT]: signOut,
});
