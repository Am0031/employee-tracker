require("dotenv").config();

//require all functions and modules needed
const fetch = require("node-fetch");
const getAnswers = require("./getAnswers");
const { generateEmployeeList } = require("./generateChoiceList");
const { getAllEmployees } = require("./viewQueries");
const PORT = process.env.PORT || 4000;
const baseUrl = `http://${process.env.DB_HOST}:${PORT}`;

//function to ask details and update employee's manager details
const updateEmployee = async () => {
  try {
    const employees = await getAllEmployees();

    const pickEmployeeQuestions = [
      {
        type: "list",
        name: "id",
        message: "Which employee would you like to update?",
        choices: generateEmployeeList(employees),
      },
    ];

    const employeeId = (await getAnswers(pickEmployeeQuestions)).id;
    const filteredEmployees = employees.filter((e) => e.id !== employeeId);

    const pickManagerQuestions = [
      {
        type: "list",
        name: "id",
        message: "Who would you like to assign as the manager?",
        choices: generateEmployeeList(filteredEmployees),
      },
    ];

    const managerId = (await getAnswers(pickManagerQuestions)).id;

    const data = {
      employeeId,
      managerId,
    };
    const response = await fetch(`${baseUrl}/api/employees/${employeeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return "Manager successfully updated";
    } else {
      throw new Error("Failed to update manager");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateEmployee };
