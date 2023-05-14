import { createRouter, createWebHistory } from "vue-router";
import Employees from "@/views/Employees/index.vue";
import EmployeesEdit from "@/views/Employees/Edit.vue";
import EmployeesCreate from "@/views/Employees/Create.vue";
import EmployeesShow from "@/views/Employees/index.vue";

const routes = [
  {
    path: "/",
    name: "employees",
    component: Employees,
  },
  {
    path: "/create",
    name: "employeeCreate",
    component: EmployeesCreate,
  },
  {
    path: "/edit/:id",
    name: "employeesEdit",
    component: EmployeesEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
