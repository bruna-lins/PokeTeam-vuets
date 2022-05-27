<template>
  <div class="flex">
    <div v-for="(pokemon, id) in store.state.pokeTeam" :key="id">
      <div class="poketeamcard justify-center ml-10 px-5 py-5 flex flex-col h-60 mt-6 mb-4">
        <div class=" flex p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md hover:bg-green-200 dark:bg-gray-800
      dark:border-gray-700 dark:hover:bg-gray-700">
          <div class="text-center">
            <span
              class="bg-green-50 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              {{ pokemon.entry_number }}
            </span>
            <div class="flex flex-col items-center">
              <img :src="getPokemonImg(pokemon.entry_number)" alt="image" class="mb-3 w-24 h-24" />
            </div>
            <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {{
                  pokemon.pokemon_species.name.toUpperCase()
              }}
            </h5>
            <div>
              <label for="nickname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nickname</label>
              <input type="text" id="nickname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                v-model="nickname">
              <button type="button"
                class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                @click="setNickname()">Save</button>
            </div>
            <button type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              @click="removePokemon(pokemon)">
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
    <button type="button"
      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      :disabled="store.state.pokeTeam.length <= 3"
      @click="savePokeTeam">
      Save Team
    </button>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from '../interfaces/pokemons';
import { mutations } from '../store/mutation-types'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const store = useStore();

const { REMOVE_FROM_POKETEAM, SET_NICKNAME, SAVE_POKETEAM } = mutations;

function getPokemonImg(entryNumber: number): string {
  var str = "" + entryNumber;
  var pad = "000";
  const ans = pad.substring(0, pad.length - str.length) + str;
  const url = `https://raw.githubusercontent.com/oscarcz7/poke_api/master/src/assets/pokemon/${ans}.png`;
  return url;
}

function removePokemon(pokemon: Pokemon) {
  store.commit(REMOVE_FROM_POKETEAM, pokemon)
  console.log('Pokemon has been removed.')
}

function savePokeTeam() {
  console.log('team has been saved');
  store.commit(SAVE_POKETEAM, store.state.pokeTeam)
  console.log(store.state.allTeams)
  router.push("/team")
}

function setNickname() {
  store.commit(SET_NICKNAME)
}

// const nickname = ref(store.state.pokeTeam[0].pokemon_species.name)
const nickname = ref('')


// function giveNickname(id: number, name: string) {
//   let nickname = {
//     id: id,
//     name: name
//   }
//   store.commit(SET_NICKNAME, nickname)
//   console.log('I think they liked.')
// }

</script>
