<template>
  <div v-if="pokemon">
       <div
      class="justify-center flex-grow flex flex-co border-t border-b sm:rounded sm:border shadow overflow-hidden bg-green-50">
      <div class="flex justify-center px-6 -mb-px">
        <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-800"> Pokemon Details</h3>
      </div>
    </div>
    <div class="flex h-screen w-screen items-center justify-center bg-green-100">
      <div
        class="p-8 w-96 cursor-pointer rounded-3xl bg-green-300 transition duration-300 ease-in-out hover:scale-105 hover:bg-green-50">
        <span class="bg-green-50 text-gray-800 text-sm font-semibold inline-flex items-end p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800
       absolute">
          #{{ pokemon?.id }}
        </span>
        <div class="-mb-20 -translate-y-1/2 transform">
          <img :src="getPokemonImg(pokemon?.id)" alt="pokemon image" class="mx-auto h-64" />
        </div>
        <div class="text-center mb-2">
          <h3 class="text-center text-4xl font-bold">{{ pokemon?.name.toUpperCase() }}</h3>
        </div>
        <div class="text-center mb-4">
          <span
            class="px-6 bg-purple-100 text-purple-800 text-xs font-semibold mr-2 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">{{
                pokemon?.types[0].type.name
            }}</span>
          <!-- <span class="px-6 bg-purple-100 text-purple-800 text-xs font-semibold mr-2 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">{{ pokemon?.types[1].type.name }}</span> -->
        </div>
        <div class="text-center">
          <ul class="mt-10 mb-10 flex justify-between text-center text-xl">
            <li class="flex flex-col"><span
                class="bg-pink-100 text-pink-800 text-sm font-bold px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
                HP
              </span>
              {{ pokemon?.stats[0].base_stat }}
            </li>
            <li class="mx-6 flex flex-col"><span
                class="bg-red-100 text-red-800 text-sm font-bold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                ATTACK
              </span>
              {{ pokemon?.stats[1].base_stat }}
            </li>
            <li class="flex flex-col"><span
                class="bg-gray-100 text-gray-800 text-sm font-bold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                DEFENSE
              </span>
              {{ pokemon?.stats[2].base_stat }}
            </li>
            <li class="mx-6 flex flex-col"><span
                class="bg-purple-100 text-purple-800 text-sm font-bold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                SPEED
              </span>
              {{ pokemon?.stats[5].base_stat }}</li>
          </ul>
        </div>
        <div class="text-center">
          <h3 class="text-center text-2xl font-bold border-t-2 mb-2">ABILITIES</h3>
          <span
            class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {{ pokemon?.abilities[0].ability.name }}
          </span>
          <!-- <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {{ pokemon?.abilities[1].ability.name }}
          </span> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import api from "../services/api";
import { onBeforeMount, ref } from "vue";
import { Pokemon } from "../interfaces/pokemons";
import { useRoute } from "vue-router";

const route = useRoute()
const pokemon = ref<Pokemon>()

const pokeId = Number(route.params.id);

onBeforeMount(async () => {
  const response = await api.detailsPokemon(pokeId)
  pokemon.value = response.data
  console.log(pokemon.value)
})

function getPokemonImg(entryNumber: number): string {
  var str = "" + entryNumber;
  var pad = "000";
  const ans = pad.substring(0, pad.length - str.length) + str;
  const url = `https://raw.githubusercontent.com/oscarcz7/poke_api/master/src/assets/pokemon/${ans}.png`;
  return url;
}


</script>
