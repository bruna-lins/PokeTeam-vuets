import { Pokemon, Pokemons } from "src/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import api from '../services/api'
import { mutations } from '../store/mutation-types'

interface State {
  pokeTeam: Pokemon[],
  allTeams: object[]
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store<State>({
  state: {
    pokeTeam: [],
    allTeams: []
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
    REMOVE_FROM_POKETEAM(state, payload) {
      // state.pokeTeam = state.pokeTeam.filter((p) => p.id !== p.id)
      const i = state.pokeTeam.map(item => item.id).indexOf(payload);
      state.pokeTeam.splice(i, 1);
    },
    SAVE_TEAM(state) {
      state.allTeams.push({...state.pokeTeam})
      state.pokeTeam = []
    }
    // SET_NICKNAME(state, { name, id }) {
    //   state.pokeTeam[id].name = name
    // }
  },

  plugins: [vuexLocal.plugin]

})

export default store;
