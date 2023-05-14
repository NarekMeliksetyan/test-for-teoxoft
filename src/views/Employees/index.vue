<script setup>
import Show from "./Show.vue";
import { ref, onMounted } from "vue";
import { getAllEmployees } from "../../../app/controllers/employeeController";

const employees = ref([]);

onMounted(async () => {
  employees.value = await getAllEmployees();
});
</script>

<template>
  <Show :employees="employees" />
</template>
