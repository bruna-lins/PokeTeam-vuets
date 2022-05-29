<template>
  <transition name="fade">
    <div v-show="open">
      <div class="absolute flex justify-center bg-black inset-0 z-0">
        <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div class="text-center p-3 flex-auto justify-center leading-6">
            <slot />
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Save
              </button>
              <button type="button"
                class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                @click="closeModal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

interface Modal {
  open: boolean
}

const props: any = defineProps<Modal>();

const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal')
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5ms ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
