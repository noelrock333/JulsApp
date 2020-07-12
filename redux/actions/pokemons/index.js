import * as types from './types';
import axios from 'axios';

export const setCurrentPokemon = (pokemon) => {
  return {
    type: types.SET_CURRENT_POKEMON,
    payload: pokemon,
  };
};

export const fetchPokemon = (pokemonName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}`,
    );
    dispatch(setCurrentPokemon(response.data));
  } catch (error) {
    console.log(error);
  }
};
