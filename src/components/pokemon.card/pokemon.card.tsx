import { PokemonStructure } from '../../models/pokemon';

import style from './pokemon.card.style.module.scss';

type PokemonCardProps = {
  pokemon: PokemonStructure;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <li className={style.pokemonCard}>
      <div className={style.pokemonCardFavouriteIcon}>
        <img src="./images/favourite-star-empty.png" alt="Favourite icon" />
      </div>

      <img
        className={style.pokemonCardPokemonImg}
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={`${pokemon.name} front`}
      />

      <p className={style.pokemonCardPokemonName}>{pokemon.name}</p>

      <p className={style.pokemonCardPokemonType}>
        {pokemon.types[0].type.name}
      </p>
    </li>
  );
}
