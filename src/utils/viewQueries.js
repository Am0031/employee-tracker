require("dotenv").config();
const fetch = require("node-fetch");
const inquirer = require("inquirer");
const getAnswers = require("./getAnswers");
const {
  generateChoiceList,
  generateEmployeeList,
} = require("./generateChoiceList");
const PORT = process.env.PORT || 4000;
const baseUrl = `http://${process.env.DB_HOST}:${PORT}`;

const getAllDepartments = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/departments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = (await response.json()).data;
      return result;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllRoles = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/roles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = (await response.json()).data;
      return result;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllEmployees = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/employees`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = (await response.json()).data;
      return result;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getManagers = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/managers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = (await response.json()).data;
      return result;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEmployeesByDepartment = async () => {
  try {
    const departments = await getAllDepartments();

    const departmentSelection = {
      type: "list",
      message: "Please choose a department to see its employees:",
      name: "id",
      choices: generateChoiceList(departments, "depName"),
    };

    const { id } = await getAnswers(departmentSelection);

    const response = await fetch(`${baseUrl}/api/employees/department/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = (await response.json()).data;
      return result;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEmployeesByManager = async () => {
  try {
    const managers = await getManagers();

    const managerSelection = {
      type: "list",
      message: "Please choose a manager to see its employees:",
      name: "id",
      choices: generateEmployeeList(managers),
    };

    const { id } = await getAnswers(managerSelection);

    const response = await fetch(`${baseUrl}/api/employees/manager/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = (await response.json()).data;
      return result;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllDepartments,
  getAllEmployees,
  getManagers,
  getEmployeesByDepartment,
  getAllRoles,
  getEmployeesByManager,
};
