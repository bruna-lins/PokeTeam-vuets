import Vuex from "vuex"
import VuexPersistence from "vuex-persist"
import api from '../services/api'
import { mutations } from '../store/mutation-types'

interface State {
  pokeTeam: object[]
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
      state.pokeTeam = payload
    },
    //editar, não mais tá funcionando
    REMOVE_FROM_POKETEAM(state, entry_number) {
      state.pokeTeam.splice(entry_number, 1)
    },
    SET_NICKNAME(state, { name, entry_number }) {
      state.pokeTeam[entry_number].name = name
      console.log('I think they liked.')
    }
  },
  actions: {
    addPokemonInTeam({ commit }) {
      api.detailsPokemon(6).then(response => {
        const poketeam = store.state.pokeTeam
        poketeam.push(response.data)
        this.commit('ADD_POKEMON_IN_TEAM', response.data)
      })
    },
    removeFromTeam({ commit }, payload) {
      this.commit('REMOVE_FROM_TEAM', payload)
    }
  },
  plugins: [vuexLocal.plugin]

})

export default store;
