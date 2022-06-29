const selectionQuestion = {
  type: "list",
  message: "Please select an action:",
  name: "selection",
  choices: [
    {
      value: "viewAllDepartments",
      name: "View All Departments",
      short: "viewAllDepartments",
    },
    {
      value: "viewAllRoles",
      name: "View All Roles",
      short: "viewAllRoles",
    },
    {
      value: "viewAllEmployees",
      name: "View All Employees",
      short: "viewAllEmployees",
    },
    {
      value: "viewEmployeesByDepartment",
      name: "View All Employees by Department",
      short: "viewEmployeesByDepartment",
    },
    {
      value: "viewEmployeesByManager",
      name: "View All Employees by Manager",
      short: "viewEmployeesByManager",
    },
    {
      value: "viewDepartmentSpend",
      name: "View Spend by Department",
      short: "viewDepartmentSpend",
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
