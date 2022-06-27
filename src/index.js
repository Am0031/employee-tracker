const startApp = require("./utils/server");
const getAnswers = require("./utils/getAnswers");
const { selectionQuestion } = require("./utils/questions");
const {
  getAllDepartments,
  getAllEmployees,
  getEmployeesByDepartment,
  getAllRoles,
  getEmployeesByManager,
  getDepartmentSpend,
} = require("./utils/viewQueries");
const { addDepartment, addRole, addEmployee } = require("./utils/addQueries");
const {
  removeDepartment,
  removeRole,
  removeEmployee,
} = require("./utils/removeQueries");
const { updateEmployee } = require("./utils/updateQueries");
const cTable = require("console.table");

const init = async () => {
  startApp();
  //start inquirer cycle
  let inProgress = true;
  while (inProgress) {
    const { selection } = await getAnswers(selectionQuestion);

    if (selection === "viewAllDepartments") {
      const result = await getAllDepartments();
      console.table(result);
    }
    if (selection === "viewAllEmployees") {
      const result = await getAllEmployees();
      console.table(result);
    }
    if (selection === "viewAllRoles") {
      const result = await getAllRoles();
      console.table(result);
    }
    if (selection === "viewEmployeesByDepartment") {
      const result = await getEmployeesByDepartment();
      console.table(result);
    }
    if (selection === "viewEmployeesByManager") {
      const result = await getEmployeesByManager();
      console.table(result);
    }
    if (selection === "viewDepartmentSpend") {
      const result = await getDepartmentSpend();
      console.table(result);
    }
    if (selection === "addDepartment") {
      const result = await addDepartment();
      console.log("Department successfully added");
    }
    if (selection === "addRole") {
      const result = await addRole();
      console.log("Role successfully added");
    }
    if (selection === "addEmployee") {
      const result = await addEmployee();
      console.log(result);
    }
    if (selection === "updateEmployee") {
      const result = await updateEmployee();
      console.log("Employee's manager successfully updated");
    }
    if (selection === "removeDepartment") {
      const result = await removeDepartment();
      console.log(
        "Department successfully removed. All its roles and employees have been removed too."
      );
    }
    if (selection === "removeRole") {
      const result = await removeRole();
      console.log(
        "Role successfully removed. All employees assigned to that role have been removed too."
      );
    }
    if (selection === "removeEmployee") {
      const result = await removeEmployee();
      console.log("Employee successfully removed");
    }
    if (selection === "viewDepartmentSpend") {
      const result = await getDepartmentSpend();
      console.log(
        `The total spend for this department is: ${result.totalSpend}`
      );
      console.table(result.result);
    }

    if (selection === "quit") {
      inProgress = false;
      console.log(
        "Thank you for using the Employee Management System! Goodbye!"
      );
    }
  }
};

init();
