require("dotenv").config();

//require all functions and modules needed
const fetch = require("node-fetch");
const getAnswers = require("./getAnswers");
const { generateChoiceList } = require("./generateChoiceList");
const PORT = process.env.PORT || 4000;
const baseUrl = `http://${process.env.DB_HOST}:${PORT}`;

//function to get all department names from db and return it to the main index.js
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

//function to get all roles from db and return it to the main index.js
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

//function to get all employees from db and return it to the main index.js
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

//helper function to get all employees assigned as managers (called in viewEmployeesByManager)
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

//function to get all employees in a department from db and return it to the main index.js
const getEmployeesByDepartment = async () => {
  try {
    const departments = await getAllDepartments();

    const departmentSelection = {
      type: "list",
      message: "Please choose a department to see its employees:",
      name: "id",
      choices: generateChoiceList(departments, "Department Name"),
    };

    const { id } = await getAnswers(departmentSelection);

    const response = await fetch(`${baseUrl}/api/departments/employees/${id}`, {
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

//function to get all employees under a manager from db and return it to the main index.js
const getEmployeesByManager = async () => {
  try {
    const managers = await getManagers();

    const managerSelection = {
      type: "list",
      message: "Please choose a manager to see its employees:",
      name: "id",
      choices: generateChoiceList(managers, "Manager Name"),
    };

    const { id } = await getAnswers(managerSelection);

    const response = await fetch(`${baseUrl}/api/managers/${id}`, {
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

//function to get the total spend of a department from db and return it to the main index.js
const getSpendByDepartment = async () => {
  try {
    const departments = await getAllDepartments();

    const departmentSelection = {
      type: "list",
      message: "Please choose a department to see its spending:",
      name: "id",
      choices: generateChoiceList(departments, "Department Name"),
    };

    const { id } = await getAnswers(departmentSelection);

    const response = await fetch(`${baseUrl}/api/departments/spend/${id}`, {
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
  getSpendByDepartment,
};
