const viewAllEmployees = async (req, res) => {
  try {
    const [employees] = await req.db.query("SELECT * FROM employees");

    return res.json({
      success: true,
      data: employees,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get employees | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get employees",
    });
  }
};

const viewAEmployeesByDepartment = async (req, res) => {
  try {
    const { depId } = req.params;
    const [filteredEmployees] = await req.db.query(
      `SELECT employees.id, employees.firstName AS 'first name', employees.lastName AS 'last name', roles.title AS 'role', departments.depName AS 'department'  
      FROM employees 
      LEFT JOIN roles ON employees.roleId = roles.id 
      LEFT JOIN departments ON roles.depId = departments.id 
      WHERE departments.id =?`,
      [depId]
    );

    return res.json({
      success: true,
      data: filteredEmployees,
    });
  } catch (error) {
    console.log(
      `[ERROR: Failed to get employees for that department | ${error.message}]`
    );

    return res.status(500).json({
      success: false,
      error: "Failed to get employees for that department",
    });
  }
};

const viewEmployeesByManager = async (req, res) => {
  try {
    const { managerId } = req.params;
    const [filteredEmployees] = await req.db.query(
      `SELECT employees.id, employees.firstName AS 'first name', employees.lastName AS 'last name', roles.title AS 'role', CONCAT (employeeManager.firstName, " ", employeeManager.lastName) AS "Manager"
      FROM employees
      LEFT JOIN roles ON employees.roleId = roles.id
      LEFT JOIN employees employeeManager ON employees.managerId = employeeManager.id
      WHERE employees.managerId =?`,
      [managerId]
    );

    return res.json({
      success: true,
      data: filteredEmployees,
    });
  } catch (error) {
    console.log(
      `[ERROR: Failed to get employees for that department | ${error.message}]`
    );

    return res.status(500).json({
      success: false,
      error: "Failed to get employees for that department",
    });
  }
};

const addEmployee = async (req, res) => {
  try {
    const payload = req.body;

    await req.db.query(
      "INSERT INTO employees (firstName, lastName, roleId, managerId) VALUES (?, ?, ?, ?)",
      [payload.firstName, payload.lastName, payload.roleId, payload.managerId]
    );

    return res.json({
      success: true,
      message: "employee successfully added",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to add employee | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to add employee",
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    await req.db.query("DELETE FROM employees WHERE id=?", [id]);

    return res.json({
      success: true,
      message: "employee successfully deleted",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to remove employee | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to remove employee",
    });
  }
};

module.exports = {
  viewAllEmployees,
  viewAEmployeesByDepartment,
  viewEmployeesByManager,
  addEmployee,
  deleteEmployee,
};
