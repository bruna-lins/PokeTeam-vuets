export interface Pokemons {
  entry_number?: number;
  pokemon_species?: Pokemon_Species;
  pokeTeam?: [];
}

interface Pokemon_Species {
  name: string;
  url: string;
}

export interface Pokemon {
  abilities:                Ability[];
  base_experience:          number;
  height:                   number;
  id:                       number;
  name:                     string;
  order:                    number;
  species:                  Species;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export interface Ability {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

export interface Species {
  name: string;
  url:  string;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot: number;
  type: Species;
}

