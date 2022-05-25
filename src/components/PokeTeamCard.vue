<template>
  <div v-for="(pokemon, id) in store.state.pokeTeam" :key="id">
    <div class="poketeamcard justify-center ml-10 px-5 py-5 flex flex-col">
      <div class=" flex p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md hover:bg-green-200 dark:bg-gray-800
      dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="text-center">
          <span
            class="bg-green-50 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            #1
          </span>
          pic
          <!-- <img :src="getPokemonImg(pokemon.entry_number)" alt="image" class="h-21 w-21 overflow-hidden" /> -->
          <h5 class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            bulbasaur
          </h5>
          <div>
            <label for="nickname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nickname</label>
            <input type="text" id="nickname"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2">
            <button type="button"
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
          </div>
          <button type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            @click="removePokemon(entry_number)">
            Remover
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Pokemons from '../interfaces/pokemons';
import { pokes } from '../store/mutation-types'
import { useStore } from 'vuex'
import { computed } from 'vue';

const store = useStore();

const { REMOVE_FROM_POKETEAM, SET_NICKNAME } = pokes;

const pokeTeam = computed(() => store.state.pokeTeam)

// function getPokemonImg(entryNumber: number): string {
//   var str = "" + entryNumber;
//   var pad = "000";
//   const ans = pad.substring(0, pad.length - str.length) + str;
//   const url = `https://raw.githubusercontent.com/oscarcz7/poke_api/master/src/assets/pokemon/${ans}.png`;
//   return url;
// }

function removePokemon(entry_number: number) {
  store.commit(REMOVE_FROM_POKETEAM, entry_number)
  console.log('Pokemon has been removed.')
}

// function giveNickname(entry_number: number, name: string) {
//   let nickname = {
//     entry_number: entry_number,
//     name: name
//   }
//   store.commit(SET_NICKNAME, nickname)
// }

</script>
