import Pokemons from "src/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import api from '../services/api'

interface State {
  pokemons: object[],
  pokeTeam: object[]
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store<State>({
  state: {
    pokemons: [],
    pokeTeam: [],
  },
  getters: {
    totalTeam(state) {
      return state.pokeTeam.length
    },
  },
  mutations: {
    ADD_TO_POKETEAM(state, payload) {
      const pokemonSelected = state.pokemons.find((x) => x.entry_number === payload);
      state.pokeTeam = [...state.pokeTeam, pokemonSelected]
    },
    REMOVE_FROM_POKETEAM(state, entry_number) {
      state.pokeTeam = state.pokeTeam.filter((x) => x.entry_number !== entry_number)
    },
    ADD_POKEMONS() {

    }
  },
  actions: {
    addPokemons({commit}, payload) {
      const req = api.allPokemons();
      commit(ADD_POKEMONS, payload)
    }
  },
  plugins: [vuexLocal.plugin]
})

export default store;
