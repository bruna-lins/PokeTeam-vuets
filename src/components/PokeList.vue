<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
    <PokeCard v-for="(pokemon, i) in data" :key="i" :pokemon="pokemon" :id="pokemon.entry_number" />
  </div>
</template>


<script setup lang="ts">
import api from '../services/api';
import { onBeforeMount, ref } from 'vue';
import PokeCard from './PokeCard.vue'
import Pokemons from '../interfaces/pokemons';

    const data = ref<any>()

    onBeforeMount(async () => {
      const response = await api.allPokemons()
      data.value = response.data.pokemon_entries
    })
</script>
