<template>
  <div class=" bg-green-100 min-h-full flex flex-col items-center justify-center">
    <div
      class=" mt-5 flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden mb-10">
      <div class="border-b">
        <div class="flex justify-center px-6 mb-12">
          <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-80"> Teams Management
          </h3>
        </div>
        <div class="mt-5 flex flex-row" v-for="(team, i) in allTeams" :key="i">
          <div
            class="mt-2 flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden mb-3">
            <div class="flex flex-row border-b">
              <div v-for="pokemon in team" :key="pokemon.entry_number">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <button type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  @click="deletePoketeam(team)">Delete</button>
                <button type="button"
                  class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  @click="editPoketeam(team)">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import { Pokemon } from '../interfaces/pokemons';
import { mutations } from '../store/mutation-types';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const { DELETE_POKETEAM, ADD_POKEMON_IN_TEAM } = mutations;

const router = useRouter();
const store = useStore();

const allTeams = computed(() => store.state.allTeams)

function getPokemonImg(entryNumber: number): string {
  var str = "" + entryNumber;
  var pad = "000";
  const ans = pad.substring(0, pad.length - str.length) + str;
  const url = `https://raw.githubusercontent.com/oscarcz7/poke_api/master/src/assets/pokemon/${ans}.png`;
  return url;
}

function deletePoketeam(team: Pokemon) {
  store.commit(DELETE_POKETEAM, team)
  console.log('The team has been removed.')
}

function editPoketeam(team: any) {
  if (store.state.pokeTeam.length > 0) {
    alert("You're already editing a team")
  } else {
    for (let i = 0; i <= 4; i++) {
      store.commit(ADD_POKEMON_IN_TEAM, team[i]);
    }
  }
  deletePoketeam(team);
  router.push("/");
}

</script>
