import { PokemonStructure } from '../models/pokemon';
import { pokemonActions } from './pokemon.actions';
import { PokemonAction } from './pokemon.actions.creator';

export function pokemonReducer(
  state: PokemonStructure[],
  action: PokemonAction
): PokemonStructure[] {
  switch (action.type) {
    case pokemonActions.load:
      return action.payload as PokemonStructure[];

    default:
      return state;
  }
}
