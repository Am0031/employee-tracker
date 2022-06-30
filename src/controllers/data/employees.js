const viewAllEmployees = async (req, res) => {
  try {
    const [employees] = await req.db
      .query(`SELECT emp.id, emp.firstName AS 'First_Name', emp.lastName AS 'Last_Name', roles.title AS 'Role', roles.salary AS 'Salary', departments.depName AS 'Department', CONCAT (employeeManager.firstName, " ", employeeManager.lastName) AS 'Manager'
    FROM employees emp
    LEFT JOIN roles ON emp.roleId = roles.id
    LEFT JOIN departments ON roles.depId = departments.id
    LEFT JOIN employees employeeManager ON emp.managerId = employeeManager.id`);

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

const updateEmployee = async (req, res) => {
  try {
    const payload = req.body;

    await req.db.query(
      `UPDATE employees SET managerId = "${payload.managerId}" WHERE id="${payload.employeeId}"`
    );

    return res.json({
      success: true,
      message: "employee successfully updated",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to update employee | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to update employee",
    });
  }
};

const removeEmployee = async (req, res) => {
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
  addEmployee,
  updateEmployee,
  removeEmployee,
};
