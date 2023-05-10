import { useContext, useEffect } from 'react';
import style from './pokemon.list.style.module.scss';
import { PokemonContext } from '../../context/pokemon.context';
import { PokemonStructure } from '../../models/pokemon';
import PokemonCard from '../pokemon.card/pokemon.card';

export default function PokemonList() {
  const { pokemonListState, loadAllPokemon } = useContext(PokemonContext);

  useEffect(() => {
    loadAllPokemon();
  }, [loadAllPokemon]);

  return (
    <section className={style.pokemonList}>
      <h1 className={style.pokemonListTitle}>
        <img src="./images/pokedex-logo.png" alt="PokeDex Logo" />
      </h1>

      <ul className={style.pokemonListCard}>
        {pokemonListState.map((item: PokemonStructure) => (
          <PokemonCard key={item.id} pokemon={item}></PokemonCard>
        ))}
      </ul>
    </section>
  );
}
