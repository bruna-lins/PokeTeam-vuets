import { Pokemon } from "src/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import { mutations } from '../store/mutation-types'

interface State {
  pokeTeam: Pokemon[],
  allTeams: Pokemon[]
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store<State>({
  state: {
    pokeTeam: [],
    allTeams: []
  },
  mutations: {
    //Pokemons
    ADD_POKEMON_IN_TEAM(state: State, payload: Pokemon) {
      state.pokeTeam.push(payload)
    },
    REMOVE_FROM_POKETEAM(state: State, payload: Pokemon) {
      const pokeIdx: number = state.pokeTeam.indexOf(payload)
      state.pokeTeam.splice(pokeIdx, 1)
    },
    // SET_NICKNAME(state: State, {payload, nickname}) {
    //   const pokeIdx = state.pokeTeam.indexOf(payload)
    //   payload.name = nickname
    // },

    //Team
    SAVE_POKETEAM(state: State) {
      state.allTeams.push({...state.pokeTeam})
      state.pokeTeam = []
    },
    DELETE_POKETEAM(state: State, payload: Pokemon) {
      state.allTeams = state.allTeams.filter((t: Pokemon) => t !== payload)
    },
  },

  plugins: [vuexLocal.plugin]

})

export default store;
