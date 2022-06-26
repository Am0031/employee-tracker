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

module.exports = { viewAllEmployees, addEmployee, deleteEmployee };
