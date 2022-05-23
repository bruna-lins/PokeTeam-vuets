<script setup lang="ts">
import PokeList from '../components/PokeList.vue';
import PokeTeam from '../components/PokeTeam.vue';

</script>

<template>
  <!-- <div class=" bg-green-100 min-h-full flex flex-col items-center justify-center">
    <div class=" mt-5 flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
      <div class="border-b">
        <div class="flex justify-center px-6 -mb-px">
          <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-800"> Pokemon Team</h3>
        </div>
        <pokeTeam />
      </div>
    </div> -->

    <div class="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden mt-10">
      <div class="border-b">
        <div class="flex justify-center px-6 -mb-px">
          <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-800"> Pokemon List</h3>
        </div>
        <pokeList />
      </div>
    </div>
  <!-- </div> -->
</template>


