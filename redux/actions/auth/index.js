import * as types from './types';

export const setUserInfo = (user) => {
  return {
    type: types.SET_USER_INFO,
    payload: user,
  };
};
