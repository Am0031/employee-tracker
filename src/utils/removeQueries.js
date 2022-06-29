require("dotenv").config();

//require all the functions and modules needed
const fetch = require("node-fetch");
const getAnswers = require("./getAnswers");
const {
  generateChoiceList,
  generateEmployeeList,
} = require("./generateChoiceList");
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
} = require("./viewQueries");
const PORT = process.env.PORT || 4000;
const baseUrl = `http://${process.env.DB_HOST}:${PORT}`;

//function to ask details and confirmation and then removes the department (and its associated roles and employees) from db
const removeDepartment = async () => {
  try {
    const departments = await getAllDepartments();
    if (departments.length) {
      const pickDepartmentQuestions = [
        {
          type: "list",
          name: "id",
          message: "Which department would you like to remove?",
          choices: generateChoiceList(departments, "Department Name"),
        },
        {
          type: "confirm",
          name: "confirm",
          message:
            "Are you sure? This cannot be undone and will remove all employees and roles within that department.",
        },
      ];
      const { id, confirm } = await getAnswers(pickDepartmentQuestions);
      if (confirm) {
        const response = await fetch(`${baseUrl}/api/departments/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          return "Department and its related content successfully deleted";
        } else {
          throw new Error("Failed to delete department");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

//function to ask details and confirmation and then removes the role (and its associated employees) from db
const removeRole = async () => {
  try {
    const roles = await getAllRoles();
    if (roles.length) {
      const pickRoleQuestions = [
        {
          type: "list",
          name: "id",
          message: "Which role would you like to remove?",
          choices: generateChoiceList(roles, "Role"),
        },
        {
          type: "confirm",
          name: "confirm",
          message:
            "Are you sure? This cannot be undone and will remove all employees assigned to this role",
        },
      ];
      const { id, confirm } = await getAnswers(pickRoleQuestions);
      if (confirm) {
        const response = await fetch(`${baseUrl}/api/roles/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          return "Role and its related content successfully deleted";
        } else {
          throw new Error("Failed to delete role");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

//function to ask details and confirmation and then removes the employee from db
const removeEmployee = async () => {
  try {
    const employees = await getAllEmployees();
    if (employees.length) {
      const pickEmployeeQuestions = [
        {
          type: "list",
          name: "id",
          message: "Which employee would you like to remove?",
          choices: generateEmployeeList(employees),
        },
        {
          type: "confirm",
          name: "confirm",
          message: "Are you sure? This cannot be undone.",
        },
      ];
      const { id, confirm } = await getAnswers(pickEmployeeQuestions);
      if (confirm) {
        const response = await fetch(`${baseUrl}/api/employees/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          return "Employee successfully deleted";
        } else {
          throw new Error("Failed to delete employee");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { removeDepartment, removeRole, removeEmployee };
