<script setup>
import Label from "./Label.vue";
import { ref } from "vue";
defineProps({
  name: String,
  label: String,
  placeholder: String,
  modelValue: [String, Number],
  type: { type: String, default: "text" },
});
defineEmits(["update:modelValue"]);

const input = ref(null);

defineExpose({ input });
</script>

<template>
  <div>
    <Label v-if="label" class="text-gray-400 mb-1" :for="name">{{ label + "*" }}</Label>
    <input
      class="border block w-full px-3 py-3.5 text-gray-700 border-gray-200 rounded-md shadow placeholder-gray-400"
      :id="name"
      :name="name"
      :type="type"
      required
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="input"
    />
  </div>
</template>
