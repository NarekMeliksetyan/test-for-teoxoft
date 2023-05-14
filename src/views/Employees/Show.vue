<script setup>
import Table from "../../components/Table/Table.vue";
import Cell from "../../components/Table/Cell.vue";
import Buttons from "../../components/Table/Buttons.vue";
import Button from "../../components/Form/Button.vue";
const props = defineProps({
  employees: Array,
});
</script>

<template>
  <div class="w-full rounded-md shadow-sm overflow-auto">
    <div class="p-3 w-full">
      <Button
        class="bg-lime-200 text-lime-700 w-auto max-w-max py-1.5"
        :to="{ name: 'employeeCreate' }"
      >
        Create New Employee
      </Button>
    </div>
    <Table class="shadow-sm text-gray-700">
      <template #header>
        <Cell header>ID</Cell>
        <Cell header>Name, surename</Cell>
        <Cell header>Experience</Cell>
        <Cell header>Age</Cell>
        <Cell header>address</Cell>
        <Cell header>Actions</Cell>
      </template>
      <template #body>
        <tr class="items-center" v-for="employee in employees" :key="employee.id">
          <Cell>{{ employee.id }}</Cell>
          <Cell>{{ employee.name }} {{ employee.surname }}</Cell>
          <Cell class="max-w-sm w-full whitespace-normal line-clamp-3">
            {{ employee.experience }}
          </Cell>
          <Cell>{{ employee.age }}</Cell>
          <Cell>{{ employee.address }}</Cell>
          <Cell>
            <Buttons class="max-w-max mx-auto" :employeeID="employee.id" />
          </Cell>
        </tr>
      </template>
    </Table>
  </div>
</template>
