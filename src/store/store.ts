import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

interface State {
    pokemons: object[],
    myTeam: object[]
}

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const store = new Vuex.Store<State>({
    state: {
        pokemons: [],
        myTeam: [],
    },
    mutations: {

    },
    plugins: [vuexLocal.plugin]
})

export default store
