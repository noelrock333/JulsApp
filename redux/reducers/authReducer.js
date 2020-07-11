import {SET_USER_INFO} from '../actions/auth/types';

const INITIAL_STATE = {
  userInfo: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {...state, userInfo: action.payload};
    default:
      return state;
  }
};
