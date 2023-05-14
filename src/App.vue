<script setup>
import { RouterView } from "vue-router";
import Loading from "./components/Includes/Loading.vue";
import { loading } from "../app/controllers/employeeController";
</script>
<template>
  <div class="min-h-screen p-4">
    <div class="max-w-screen-2xl mx-auto">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <component :is="Component"></component>
        </template>
        <Loading v-if="loading" />
      </RouterView>
    </div>
  </div>
</template>
