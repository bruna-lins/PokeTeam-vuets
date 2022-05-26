<template>
  <div class="pokecard justify-center ml-10 px-5 py-5 flex flex-col">
    <div class=" flex p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md hover:bg-green-200 dark:bg-gray-800
      dark:border-gray-700 dark:hover:bg-gray-700">
      <div class="text-center">
        <span
          class="bg-green-50 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">#
          {{ pokemon.entry_number }}</span>
        <img :src="getPokemonImg(props.pokemon.entry_number)" alt="image" class="h-21 w-21 overflow-hidden" />
        <h5 class="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{
            pokemon.pokemon_species.name.toUpperCase()
        }}
        </h5>
        <button type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="addPokemonInTeam(pokemon)">Choose</button>
        <router-link :to="`/details/${pokemon.entry_number}`" type="button"
          class="text-gray-100 bg-green-500 border border-gray-300 focus:outline-none hover:bg-green-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          View Details</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pokemons, Pokemon } from '../interfaces/pokemons';
import { useStore } from 'vuex';
import { mutations } from '../store/mutation-types'

const store = useStore();

interface Props {
  pokemon: Pokemons
}

const props = defineProps<Props>();

function getPokemonImg(entryNumber: number): string {
  var str = "" + entryNumber;
  var pad = "000";
  const ans = pad.substring(0, pad.length - str.length) + str;
  const url = `https://raw.githubusercontent.com/oscarcz7/poke_api/master/src/assets/pokemon/${ans}.png`;
  return url;
}


function addPokemonInTeam(payload: Pokemon) {
  if (store.state.pokeTeam.length <= 4) {
    store.commit('ADD_POKEMON_IN_TEAM', payload)
  } else {
    alert("You can't add more pokemons")
    return
  }
}

</script>
