<template>
  <div class="flex justify-center">
    <div v-for="(pokemon, id) in store.state.pokeTeam" :key="id">
      <div class="poketeamcard justify-center ml-10 px-5 py-5 flex flex-col mt-6 mb-4">
        <div
          class="flex p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md hover:bg-green-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 box-border h-22 w-48 justify-center">
          <div class="text-center">
            <span
              class="bg-green-50 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              # {{ pokemon.entry_number }}
            </span>
            <div class="flex flex-col items-center">
              <img :src="getPokemonImg(pokemon.entry_number)" alt="image" class="mb-3 w-24 h-24" />
            </div>
            <div class="flex flex-row justify-center">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white p-1 text-center">
                  {{
                      pokemon.pokemon_species.name.toUpperCase()
                  }}
                </h5>
                <button class="rounded-full h-5 w-5 text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none"
                  @click="isOpen = true">
                  <PencilAltIcon class="h-3 w-3 ml-1 text-gray-100" />
                </button>
              <Modal :open="isOpen" @closeModal="isOpen = !isOpen">
                <h2 class="text-2xl font-bold py-4">Try some nice nickname</h2>
                <div class="relative">
                  <input type="text" id="nickname"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " />
                  <label for="floating_outlined"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Nickname
                  </label>
                </div>
              </Modal>
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
  </div>
  <div class="justify-center flex flex-grow h-full items-center mb-3">
    <button type="button"
      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 self-center"
      :disabled="store.state.pokeTeam.length <= 4" @click="savePokeTeam">
      Save Team
    </button>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from '../interfaces/pokemons';
import { mutations } from '../store/mutation-types'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { ref } from "vue";
import { PencilAltIcon } from '@heroicons/vue/solid'
import Modal from './Modal.vue'

const router = useRouter();
const store = useStore();

const { REMOVE_FROM_POKETEAM, SET_NICKNAME, SAVE_POKETEAM } = mutations;


// const pokeName: string = ref(store.state.pokeTeam[id].name)

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

// const nickname = ref('')

// function giveNickname(nickname: string) {
//   store.commit(SET_NICKNAME, nickname)
//   console.log('I think they liked.')
// }

//Modal
const isOpen = ref(false)

</script>
