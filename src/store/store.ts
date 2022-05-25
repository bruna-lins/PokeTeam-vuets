import { Pokemon } from "src/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import api from '../services/api'
import { mutations } from '../store/mutation-types'

interface State {
  pokeTeam: Pokemon[]
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
    REMOVE_FROM_POKETEAM(state, id) {
     state.pokeTeam = state.pokeTeam.filter(
        (p) => p.id !== p.id
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
