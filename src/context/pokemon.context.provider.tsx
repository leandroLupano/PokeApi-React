import { useMemo } from 'react';
import { PokemonApiRepo } from '../services/repository/pokemon.api.repo';
import { usePokemon } from '../hook/use.pokemon';
import { PokemonContext } from './pokemon.context';

export function PokemonContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const pokemonApiRepo = useMemo(() => new PokemonApiRepo(), []);

  const context = { ...usePokemon(pokemonApiRepo) };

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
}
