import { Pokemons } from "src/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import api from '../services/api'
import { mutations } from '../store/mutation-types'

interface State {
  pokeTeam: Pokemons[]
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store<State>({
  state: {
    pokeTeam: [],
  },
  getters: {
    totalTeam(state) {
      return state.pokeTeam.length
    },
  },
  mutations: {
    ADD_POKEMON_IN_TEAM(state, payload) {
      console.log('payload: ', payload)
      state.pokeTeam.push(payload)
    },
    REMOVE_FROM_POKETEAM(state, entry_number) {
      state.pokeTeam.filter(
        (p) => p.entry_number !== p.entry_number
      )

    },
    // SET_NICKNAME(state, { name, entry_number }) {
    //   state.pokeTeam[entry_number].name = name
    //   console.log('I think they liked.')
    // }
  },

  plugins: [vuexLocal.plugin]

})

export default store;
