require("dotenv").config();
const fetch = require("node-fetch");
const inquirer = require("inquirer");
const {
  generateEmployeeList,
  generateChoiceList,
} = require("./generateChoiceList");
const {
  getAllDepartments,
  getAllEmployees,
  getAllRoles,
} = require("./viewQueries");
const PORT = process.env.PORT || 4000;
const baseUrl = `http://${process.env.DB_HOST}:${PORT}`;

const addDepartment = async () => {
  try {
    const addDepartmentQuestions = [
      {
        type: "input",
        name: "depName",
        message: "What's the name of the department?",
        validate: (answer) =>
          !answer
            ? "This is a mandatory field. Please enter a department name."
            : true,
      },
    ];

    const { depName } = await inquirer.prompt(addDepartmentQuestions);

    const data = { depName };
    const response = await fetch(`${baseUrl}/api/departments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return "Department successfully added";
    } else {
      throw new Error("Failed to add department");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const addRole = async () => {
  try {
    const departments = await getAllDepartments();

    if (!departments.length) {
      console.log("You must add some departments before you can add roles.");
    } else {
      const addRoleQuestions = [
        {
          type: "input",
          name: "title",
          message: "What's the title of the role?",
        },
        {
          type: "input",
          name: "salary",
          message: "What's the corresponding salary?",
          validate: (answer) =>
            answer && !isNaN(answer)
              ? true
              : "This is mandatory and must be a number. Please enter a valid salary.",
        },
        {
          type: "list",
          name: "depId",
          message: "Please select the department this role belongs to:",
          choices: generateChoiceList(departments, "depName"),
        },
      ];
      const { title, salary, depId } = await inquirer.prompt(addRoleQuestions);

      const data = { title, salary, depId };
      const response = await fetch(`${baseUrl}/api/roles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        return "Role successfully added";
      } else {
        throw new Error("Failed to add role");
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

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
      const addEmployeeQuestions = [
        {
          type: "input",
          message: "What's the employee's first name?",
          name: "firstName",
        },
        {
          type: "input",
          message: "What's the employee's last name?",
          name: "lastName",
        },
        {
          type: "list",
          message: "Please select the employee's role:",
          name: "roleId",
          choices: generateChoiceList(roles, "title"),
        },
      ];
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
          return "Employee successfully added";
        } else {
          throw new Error("Failed to add employee");
        }
      } else {
        const addManagerQuestions = [
          {
            type: "confirm",
            message: "Do you want to assign a manager to this employee?",
            name: "hasManager",
          },
          {
            type: "list",
            message: "Please select the employee's manager from this list:",
            name: "managerId",
            when: (answers) => {
              return answers.hasManager;
            },
            choices: generateEmployeeList(employees),
          },
        ];
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
          return "Employee successfully added";
        } else {
          throw new Error("Failed to add employee");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { addDepartment, addRole, addEmployee };
