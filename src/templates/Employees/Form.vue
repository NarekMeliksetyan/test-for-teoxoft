<script setup>
import Input from "../../components/Form/Input.vue";
const props = defineProps({
  msg: String,
  status: String,
  modelValue: [String, Number],
});
defineEmits(["update:modelValue", "formAction"]);
</script>
<template>
  <div
    class="bg-white max-w-5xl mx-auto shadow-sm rounded-md mt-10 p-3 md:p-5 border border-gray-200/40"
  >
    <div class="text-3xl text-gray-700 border-b border-gray-100 pb-2">{{ msg }}</div>
    <form @submit.prevent="$emit('formAction')" class="grid md:grid-cols-2 gap-4 p-4">
      <Input placeholder="name" v-model="modelValue.name" required label="Name" />
      <Input
        placeholder="surename"
        v-model="modelValue.surename"
        required
        label="surename"
      />
      <Input
        placeholder="age"
        v-model="modelValue.age"
        class="appearance-none hover:appearance-none"
        required
        type="number"
        label="age"
      />
      <Input
        placeholder="experience"
        v-model="modelValue.experience"
        required
        label="experience"
      />
      <Input
        placeholder="address"
        v-model="modelValue.address"
        required
        label="address"
      />
      <slot />
    </form>
  </div>
</template>
