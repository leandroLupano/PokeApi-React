import { useCallback, useReducer } from 'react';
import { PokemonStructure } from '../models/pokemon';
import { PokemonApiRepo } from '../services/repository/pokemon.api.repo';
import { pokemonReducer } from '../reducer/pokemon.reducer';
import { loadAllPokemonCreator } from '../reducer/pokemon.actions.creator';

export type UsePokemonStructure = ReturnType<typeof usePokemon>;

export function usePokemon(repo: PokemonApiRepo) {
  const initialState: PokemonStructure[] = [];

  const [pokemonListState, dispatch] = useReducer(pokemonReducer, initialState);

  const loadAllPokemon = useCallback(async () => {
    try {
      const pokemonList = await repo.loadAllPokemon();

      dispatch(loadAllPokemonCreator(pokemonList));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  return {
    pokemonListState,
    loadAllPokemon,
  };
}
