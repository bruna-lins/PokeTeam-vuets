<template>
  <div>

    <pokeCard v-for="(pokemon, i) in data" :key="i" :pokemon="pokemon" :id="pokemon.entry_number" />
  </div>
</template>

<script lang="ts">
import api from '../services/api';
import { onBeforeMount, reactive, ref } from 'vue';
import PokeCard from './PokeCard.vue'
import Pokemons from '../interfaces/pokemons';

export default {
  components: {
    PokeCard
  },
  setup() {
    const pokemon = reactive<Pokemons>({
      id: 0,
      entry_number: 0,
      name: "",
      type: "",
      image: "",
      myTeam: [],
      types: [],
      sprites: ""
    })

    const data = ref<any>()

    onBeforeMount(async () => {
      const response = await api.allPokemons()
      data.value = response.data.pokemon_entries
      console.log(data.value)
    })

    return { data }
  }
}
</script>
