export type PokemonIndividualInfo = {
  name: string;
  url: string;
};

export type PokemonGroupLoaded = {
  next: string;
  previous: string | null;
  results: PokemonIndividualInfo[];
};

export type PokemonStructure = {
  abilities: [{ ability: { name: string } }];
  height: number;
  id: number;
  moves: [{ move: { name: string } }];
  name: string;
  sprites: { other: { 'official-artwork': { front_default: string } } };
  types: [{ type: { name: string } }];
  weight: number;
};
