import { reactive, ref } from "vue";
import Employee from "../models/Employee";

export const state = reactive({
  employees: [],
});
const executeEmployeeAction = async (action, ...params) => {
  try {
    loading.value = true;
    const employeeModel = new Employee("employee");
    const result = await employeeModel[action](...params);
    if (action === "delete") {
      const index = state.employees.findIndex(
        (employee) => employee.id === params[0]
      );

      state.employees.splice(index, 1);
    }
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

export const loading = ref(null);

export const getAllEmployees = async () => {
  const result = await executeEmployeeAction("getAll");
  state.employees = result;
  return state.employees;
};

export const getEmployeeById = async (id) => {
  return executeEmployeeAction("getById", id);
};

export const createEmployee = async (req) => {
  const employee = new Employee(req);
  return executeEmployeeAction("save", employee);
};

export const updateEmployee = async (req) => {
  const employeeData = await executeEmployeeAction("getById", req.id);
  const employee = new Employee(employeeData);
  Object.assign(employee, req);
  return executeEmployeeAction("update", employee);
};

export const deleteEmployee = async (id) => {
  await executeEmployeeAction("delete", id);
  return state.employees;
};
