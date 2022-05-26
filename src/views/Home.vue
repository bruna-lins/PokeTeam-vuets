<template>
  <div class=" bg-green-100 min-h-full flex flex-col items-center justify-center">
    <div
      class="mt-2 flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden mb-3">
      <div class="border-b">
        <div class="flex justify-center px-6">
          <h3 class="mt-3 p-2 text-3xl font-semibold text-gray-80"> Pokemon Team
          </h3>
        </div>
        <div class="mt-5">
          <PokeTeam />
        </div>
      </div>
    </div>

    <div class="flex-grow flex flex-co border-t border-b sm:rounded sm:border shadow overflow-hidden bg-green-50">
      <div class="border-b">
        <div class="flex justify-center px-6 -mb-px">
          <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-800"> Pokemon List
          </h3>
        </div>
        <PokeList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import PokeList from '../components/PokeList.vue';
import PokeTeam from '../components/PokeTeam.vue';

const store = useStore();

const totalTeam = computed(() => store.getters.totalTeam)

</script>
