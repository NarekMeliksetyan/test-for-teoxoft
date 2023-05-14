<template>
  <Teleport :to="to">
    <div v-if="modal" class="fixed top-0 w-full min-h-screen bg-black/10">
      <div
        class="max-w-xl p-6 w-full bg-white top-1/3 space-y-2 mx-auto mt-20 rounded-md shadow-xl"
      >
        <slot>
          <div class="flex">
            <Button
              @click="modal = false"
              as="button"
              class="ml-auto w-1/4 text-red-500/80 bg-red-200/50 py-1 px-4"
              >close</Button
            >
          </div>
          <div
            v-for="(value, field) in data"
            class="border-t justify-between pt-2 border-t-gray-300/30 flex flex-col md:flex-row gap-x-4"
          >
            <span class="text-gray-500">{{ field }}:</span>
            <p class="max-w-xs w-full">{{ value }}</p>
          </div>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import Button from "../Form/Button.vue";
defineProps({
  to: String,
  modal: [Boolean, Number],
  data: Object,
});
</script>
