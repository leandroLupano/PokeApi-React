import { createContext } from 'react';
import { UsePokemonStructure } from '../hook/use.pokemon';

export const PokemonContext = createContext({} as UsePokemonStructure);
