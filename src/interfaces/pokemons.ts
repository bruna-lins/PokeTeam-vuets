export default interface Pokemons {
  id: number;
  entry_number: number;
  pokemon_species: [];
  name?: string;
  type?: string;
  image?: string;
  myTeam: pokeTeam;
  types: [];
  sprites: string
}

// apagar???
export type pokeTeam = object | Pokemons;
