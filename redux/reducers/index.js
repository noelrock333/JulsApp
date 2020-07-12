import {combineReducers} from 'redux';
import authReducer from './authReducer';
import pokemonsReducer from './pokemonsReducer';

export default combineReducers({
  auth: authReducer,
  pokemons: pokemonsReducer,
});
