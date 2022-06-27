require("dotenv").config();
const fetch = require("node-fetch");
const inquirer = require("inquirer");
const { generateChoiceList } = require("./generateChoiceList");
const {
  getAllDepartments,
  getAllEmployees,
  getAllRoles,
} = require("./viewQueries");
const PORT = process.env.PORT || 4000;
const baseUrl = `http://${process.env.DB_HOST}:${PORT}`;

const addEmployee = async () => {
  try {
    const departments = await getAllDepartments();
    const roles = await getAllRoles();

    if (!departments.length) {
      console.log(
        "You must add some departments before you can add roles and employees."
      );
    } else if (!roles.length) {
      console.log("You must add some roles before you can add employees.");
    } else {
      const { firstName, lastName, roleId } = await inquirer.prompt(
        addEmployeeQuestions
      );

      const employees = await getAllEmployees();

      if (!employees.length) {
        const data = { firstName, lastName, roleId };
        const response = await fetch(`${baseUrl}/api/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          return true;
        } else {
          throw new Error("Failed to add data");
        }
      } else {
        const { managerId } = await inquirer.prompt(addManagerQuestions);
        const data = { firstName, lastName, roleId, managerId };
        const response = await fetch(`${baseUrl}/api/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          return true;
        } else {
          throw new Error("Failed to add data");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const addRole = async () => {};

const addDepartment = async () => {};

module.exports = { addDepartment, addRole, addEmployee };
