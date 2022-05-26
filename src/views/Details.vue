<template>
  <div v-if="pokemon">
    <div
      class="justify-center flex-grow flex flex-co border-t border-b sm:rounded sm:border shadow overflow-hidden bg-green-50">
      <div class="flex justify-center px-6 -mb-px">
        <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-800"> Pokemon Details</h3>
      </div>
    </div>
    <div class="pokecard justify-center ml-10 px-5 py-5 flex flex-col">
      <div class="flex p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md hover:bg-green-200 dark:bg-gray-800
      dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="text-center">
          <span
            class="bg-green-50 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">#
            {{ pokemon?.id }}
          </span>
          <img :src="getPokemonImg(pokemon?.id)" alt="image" class="h-21 w-21 overflow-hidden" />
          <h5 class="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ pokemon?.name }}
          </h5>
          <div>
            <h3>TYPES</h3>
            <p> {{ pokemon?.types[0].type.name }} </p>
            <p> {{ pokemon?.types[1].type.name }} </p>
          </div>
          <div>
            <h3>ABILITIES</h3>
            <p> {{ pokemon?.abilities[0].ability.name }} </p>
            <p> {{ pokemon?.abilities[1].ability.name }} </p>
          </div>
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
