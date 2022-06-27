require("dotenv").config();
const fetch = require("node-fetch");
const cTable = require("console.table");
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
      const result = await response.json();
      console.table(result.data);
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
      const result = await response.json();
      console.table(result.data);
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllDepartments, getAllEmployees };
