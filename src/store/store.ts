import { Pokemons, Pokemon } from "src/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import api from '../services/api'
import { mutations } from '../store/mutation-types'

interface State {
  pokemon: Pokemons,
  pokeTeam: Pokemon[],
  allTeams: object[]
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store<State>({
  state: {
    pokemon: {
      id: 0,
      name: ''
    },
    pokeTeam: [],
    allTeams: []
  },
  // getters: {
  //   totalTeam(state) {
  //     return state.pokeTeam.length
  //   },
  // },
  mutations: {
    //Pokemons
    ADD_POKEMON_IN_TEAM(state, payload) {
      state.pokeTeam.push(payload)
    },
    // CORRIGIR
    REMOVE_FROM_POKETEAM(state, payload: Pokemon) {
      const pokeIdx = state.pokeTeam.indexOf(payload)
      state.pokeTeam.splice(pokeIdx, 1)
    },
    // SET_NICKNAME(state, {pokemon, id}) {
    //   let poke = state.pokeTeam.find(
    //     p => p.id == pokemon.id
    //   )
    //   poke = pokemon;
    //   console.log(poke)
    // },

    //Team
    SAVE_POKETEAM(state) {
      state.allTeams.push({...state.pokeTeam})
      state.pokeTeam = []
    },
    DELETE_POKETEAM(state, payload) {
      state.allTeams = state.allTeams.filter((t) => t !== payload)
    },
  },

  plugins: [vuexLocal.plugin]

})

export default store;
