import {SET_CURRENT_POKEMON} from '../actions/pokemons/types';

const INITIAL_STATE = {
  current: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_POKEMON:
      return {...state, current: action.payload};
    default:
      return state;
  }
};
