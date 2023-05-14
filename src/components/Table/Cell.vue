<script setup>
defineProps({
  header: Boolean,
  colspan: String,
});
</script>

<template>
  <component
    :is="header ? 'th' : 'td'"
    :colspan="colspan"
    class="relative px-4 sm:px-6 py-3.5 last:text-center whitespace-nowrap"
  >
    <slot />
  </component>
</template>
