<template>
  <div
    class="justify-center flex-grow flex flex-co border-t border-b sm:rounded sm:border shadow overflow-hidden bg-green-50">
    <div class="flex justify-center px-6 -mb-px">
      <h3 class="mt-3 mb-3 p-2 text-3xl font-semibold text-gray-800"> Pokemon Details</h3>
    </div>
  </div>

</template>

<script lang="ts">
import Pokemons from "../interfaces/pokemons";
import { onBeforeMount, reactive, ref } from "vue";
import api from "../services/api";

export default {
  setup() {

    const pokemonDetail = reactive<Pokemons>({
      id: 0,
      entry_number: 0,
      pokemon_species: [],
      name: "",
      type: "",
      image: "",
      myTeam: [],
      types: [],
      sprites: ""
    })

    const datadetail = ref<any>()

    onBeforeMount(async () => {
      const response = await api.detailsPokemon(1)
      datadetail.value = response.data.types
      console.log(datadetail.value)
    })

    return { datadetail }

  }
}
</script>
