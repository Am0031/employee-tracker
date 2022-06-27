const viewAllDepartments = async (req, res) => {
  try {
    const [departments] = await req.db.query("SELECT * FROM departments");

    return res.json({
      success: true,
      data: departments,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get departments | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get departments",
    });
  }
};

const addDepartment = async (req, res) => {
  try {
    const payload = req.body;

    await req.db.query("INSERT INTO departments (depName) VALUES (?)", [
      payload.depName,
    ]);

    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to add department | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to add department",
    });
  }
};

const removeDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    await req.db.query("DELETE FROM departments WHERE id=?", [id]);

    return res.json({
      success: true,
      message: "department successfully deleted",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to remove department | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to remove department",
    });
  }
};

const viewDepartmentSpend = async (req, res) => {
  try {
    const { depId } = req.params;
    const depSpend = await req.db.query(
      `SELECT departments.depName as "Department", SUM(roles.salary) "Department Spend"
    FROM employees
    LEFT JOIN roles ON roles.id = employees.roleId
    LEFT JOIN departments ON roles.depId = departments.id
    WHERE departments.id = ?`,
      [depId]
    );

    return res.json({
      success: true,
      data: depSpend,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get department spend | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get department spend",
    });
  }
};

module.exports = {
  viewAllDepartments,
  addDepartment,
  removeDepartment,
  viewDepartmentSpend,
};
