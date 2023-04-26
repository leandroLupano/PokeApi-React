import { PokemonGroupLoaded, PokemonStructure } from '../../models/pokemon';

export interface PokemonRepo<T> {
  loadPokemon(): Promise<T>;
}

export class PokemonApiRepo implements PokemonRepo<PokemonStructure[]> {
  url: string;

  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async loadPokemon(): Promise<PokemonStructure[]> {
    const pokemonGroupLoadedFetch = await fetch(this.url);
    const pokemonGroupLoaded: PokemonGroupLoaded =
      await pokemonGroupLoadedFetch.json();

    const pokemonGroupLoadedArray = pokemonGroupLoaded.results;

    const promisesPokemonArray = pokemonGroupLoadedArray.map(async (item) => {
      let pokemonUrl = item.url;

      const pokemonLoadedFetch = await fetch(pokemonUrl);
      const pokemonLoaded = await pokemonLoadedFetch.json();

      return pokemonLoaded;
    });

    const pokemonArray: PokemonStructure[] = await Promise.all(
      promisesPokemonArray
    );

    return pokemonArray;
  }
}
