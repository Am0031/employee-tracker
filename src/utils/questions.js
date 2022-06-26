const selectionQuestion = {
  type: "list",
  message: "Please select an action:",
  name: "selection",
  choices: [
    {
      value: "viewAllDepartments",
      name: "View All Departments",
      short: "allDepartments",
    },
    {
      value: "viewAllRoles",
      name: "View All Roles",
      short: "allRoles",
    },
    {
      value: "viewAllEmployees",
      name: "View All Employees",
      short: "allEmployees",
    },
    {
      value: "employeesByDepartment",
      name: "View All Employees by Department",
      short: "employeesByDepartment",
    },
    {
      value: "employeesByManager",
      name: "View All Employees by Manager",
      short: "employeesByManager",
    },
    {
      value: "departmentSpend",
      name: "View total department spend",
      short: "departmentSpend",
    },
    {
      value: "addDepartment",
      name: "Add a Department",
      short: "addDepartment",
    },
    {
      value: "addRole",
      name: "Add a Role",
      short: "addRole",
    },
    {
      value: "addEmployee",
      name: "Add an Employee",
      short: "addEmployee",
    },
    {
      value: "updateEmployee",
      name: "Update an Employee's Manager",
      short: "updateEmployee",
    },
    {
      value: "removeDepartment",
      name: "Remove a Department",
      short: "removeDepartment",
    },
    {
      value: "removeRole",
      name: "Remove a Role",
      short: "removeRole",
    },
    {
      value: "removeEmployee",
      name: "Remove an Employee",
      short: "removeEmployee",
    },
    {
      value: "quit",
      name: "Quit application",
      short: "quit",
    },
  ],
};

module.exports = { selectionQuestion };
