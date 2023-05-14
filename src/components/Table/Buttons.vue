<script setup>
import { ref } from "vue";
import Button from "../Form/Button.vue";
import { EyeIcon, TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
import {
  getEmployeeById,
  deleteEmployee,
} from "../../../app/controllers/employeeController";
import Modal from "../Includes/Modal.vue";
const modal = ref(false);
const data = ref([]);
const props = defineProps({
  employeeID: String,
});

async function manageEmploee(action) {
  try {
    if (action === "getEmplyee") {
      return (data.value = await getEmployeeById(props.employeeID));
    }
    await deleteEmployee(props.employeeID);
  } catch (error) {
    console.error(error);
  } finally {
    modal.value = true;
  }
}
</script>
<template>
  <div class="flex gap-x-4">
    <Modal to="#app" :modal="modal" :data="data" />
    <Button
      as="buttons"
      @click="manageEmploee('getEmplyee')"
      class="shadow border cursor-pointer border-gray-100 p-2"
    >
      <EyeIcon class="w-4 h-4 text-gray-600 m-auto" />
    </Button>
    <Button
      :to="{ name: 'employeesEdit', params: { id: employeeID } }"
      class="shadow border cursor-pointer border-gray-100 p-2"
    >
      <PencilIcon class="w-4 h-4 text-gray-600 m-auto" />
    </Button>
    <Button
      as="buttons"
      class="shadow border cursor-pointer border-gray-100 p-2"
      @click="manageEmploee(false)"
    >
      <TrashIcon class="w-4 h-4 text-gray-600 m-auto" />
    </Button>
  </div>
</template>
