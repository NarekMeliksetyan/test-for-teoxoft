<script setup>
import FormTemplate from "../../templates/Employees/Form.vue";
import { createEmployee } from "../../../app/controllers/employeeController";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const formData = reactive({
  name: "",
  surename: "",
  age: "",
  experience: "",
  address: "",
});
async function newEmployee() {
  try {
    await createEmployee(formData);
    router.push({ path: "/" });
  } catch (error) {
    console.error(error);
  } finally {
  }
}
</script>

<template>
  <FormTemplate
    @formAction="newEmployee"
    status="create"
    msg="Create new employee"
    v-model="formData"
  >
    <div class="flex">
      <Button
        as="button"
        class="mt-6 rounded-full py-2 border border-gray-300/60 px-6 text-lime-700 mx-auto bg-lime-200 hover:text-lime-800 hover:bg-lime-300 duration-150"
        >submit</Button
      >
    </div>
  </FormTemplate>
</template>
