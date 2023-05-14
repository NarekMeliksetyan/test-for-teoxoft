<script setup>
import { RouterLink } from "vue-router";

defineProps({
  as: {
    type: [String, Object],
    default: RouterLink,
  },
});
</script>
<template>
  <component
    :is="as"
    :class="['block w-full p-4 font-bold text-center shadow-sm rounded-full']"
  >
    <slot />
  </component>
</template>
