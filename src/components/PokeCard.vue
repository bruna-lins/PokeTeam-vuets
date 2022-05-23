<template>
  <div class="pokecard text-center px-6 py-4">
    <div class="py-8">
      <div class="flex items-stretch">
        <div class="p-2 m-auto text-center self-center">
          <div
            class="max-w-sm bg-purple-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <p class="mb-2 text-2xl font-normal tracking-tight text-gray-400 dark:text-white">
                {{ props.pokemon.entry_number }} </p>
              <div class="flex justify-center">
                <!-- <img :src="getPokemonImg(props.pokemon.entry_number)" alt="image" /> -->
              </div>
              <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ props.pokemon.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Pokemons from '../interfaces/pokemons';
import { defineProps } from 'vue';

export default {
  setup() {

    interface Props {
      pokemon: Pokemons
    }

    const props = defineProps<Props>();

    // function getPokemonImg(entryNumber: number): string {
    //   var str = "" + entryNumber;
    //   var pad = "000";
    //   const ans = pad.substring(0, pad.length - str.length) + str;
    //   const url = `https://raw.githubusercontent.com/oscarcz7/poke_api/master/src/assets/pokemon/${ans}.png`;
    //   return url;
    // }

  }

}
</script>
