import { Pokemon } from "src/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import api from '../services/api'
import { mutations } from '../store/mutation-types'

interface State {
  pokemon: Pokemon[],
  pokeTeam: Pokemon[],
  allTeams: object[]
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store<State>({
  state: {
    pokemon: [],
    pokeTeam: [],
    allTeams: []
  },
  // getters: {
  //   totalTeam(state) {
  //     return state.pokeTeam.length
  //   },
  // },
  mutations: {
    ADD_POKEMON_IN_TEAM(state, payload) {
      state.pokeTeam.push(payload)
    },
    // CORRIGIR
    REMOVE_FROM_POKETEAM(state, payload) {
      //REMOVENDO TODOS DE UMA VEZ
      // state.pokeTeam = state.pokeTeam.filter((p) => p.id !== payload.id)

      //REMOVENDO POR ORDEM NO ARRAY
      const i = state.pokeTeam.map(item => item.id).indexOf(payload);
      state.pokeTeam.splice(i, 1);
    },
    SAVE_POKETEAM(state) {
      state.allTeams.push({...state.pokeTeam})
      state.pokeTeam = []
    },
    DELETE_POKETEAM(state, payload) {
      state.allTeams = state.allTeams.filter((t) => t !== payload)
    },
    SET_NICKNAME(state, {nickname, id}) {
      state.pokeTeam = state.pokeTeam.filter(
        (p) => p.id === id
      )
      state.pokeTeam[id].name = nickname
    }
    // SET_NICKNAME(state, { name, id }) {
    //   state.pokemon[id].name = name
    // }
  },

  plugins: [vuexLocal.plugin]

})

export default store;
