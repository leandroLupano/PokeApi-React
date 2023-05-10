import { PokemonStructure } from '../models/pokemon';
import { pokemonActions } from './pokemon.actions';

export interface Action {
  type: string;
  payload?: any;
}

export interface PokemonAction extends Action {
  payload: PokemonStructure[];
}

export const loadAllPokemonCreator = (
  payload: PokemonStructure[]
): PokemonAction => {
  return {
    type: pokemonActions.loadAll,
    payload,
  };
};
