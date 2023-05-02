import { PokemonStructure } from '../models/pokemon';
import { pokemonActions } from './pokemon.actions';

export interface Action {
  type: string;
  payload?: any;
}

export interface PokemonAction extends Action {
  payload: PokemonStructure[];
}

export const loadPokemonCreator = (
  payload: PokemonStructure[]
): PokemonAction => {
  return {
    type: pokemonActions.load,
    payload,
  };
};
