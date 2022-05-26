<template>
  <div class=" bg-green-100 min-h-full flex flex-col items-center justify-center">
    <div
      class=" mt-5 flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden mb-10">
      <div class="border-b">
        <!-- <div class="flex justify-center px-6 mb-12">
          <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-80"> Pokemon Team
            <span v-if="totalTeam > 0" class="text-base"> {{ totalTeam }} Pokemons</span>
          </h3>
        </div> -->
        <div class="mt-5 flex flex-row" v-for="(team, i) in allTeams" :key="i">
          <p> {{ store.state.allTeams }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

const store = useStore();

const totalTeam = computed(() => store.getters.totalTeam)

const allTeams = computed(() => store.state.allTeams)

</script>
