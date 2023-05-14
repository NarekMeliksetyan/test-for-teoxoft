<script setup>
import Form from "../../templates/Employees/Form.vue";
import {
  getEmployeeById,
  updateEmployee,
} from "../../../app/controllers/employeeController";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const employee = ref([]);

async function employeeManage(action) {
  try {
    if (action) {
      await updateEmployee(employee.value);
      router.push("/");
    }
    employee.value = await getEmployeeById(route.params.id);
  } catch (error) {
    console.error(error);
  }
}

onMounted(employeeManage);
</script>

<template>
  <Form
    @formAction="employeeManage('updateData')"
    status="edit"
    msg="Edit employee"
    v-model="employee"
  >
    <div class="flex">
      <Button
        as="button"
        class="mt-6 rounded-full py-2 border border-gray-300/60 px-6 text-lime-700 mx-auto bg-lime-200 hover:text-lime-800 hover:bg-lime-300 duration-150"
        >submit</Button
      >
    </div>
  </Form>
</template>
