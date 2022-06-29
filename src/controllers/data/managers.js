const getManagers = async (req, res) => {
  try {
    const [managers] = await req.db.query(
      `SELECT employees.id, CONCAT (employees.firstName, " ", employees.lastName) AS "Manager Name"
      FROM employees 
      WHERE employees.id IN (SELECT DISTINCT managerId FROM employees WHERE managerId IS NOT NULL)`
    );

    return res.json({
      success: true,
      data: managers,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get managers | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get managers",
    });
  }
};

const viewEmployeesByManager = async (req, res) => {
  try {
    const { id } = req.params;
    const [filteredEmployees] = await req.db.query(
      `SELECT emp.id, emp.firstName AS 'First Name', emp.lastName AS 'Last Name', roles.title AS 'role', CONCAT (employeeManager.firstName, " ", employeeManager.lastName) AS "Manager"
      FROM employees emp
      LEFT JOIN roles ON emp.roleId = roles.id
      LEFT JOIN employees employeeManager ON emp.managerId = employeeManager.id
      WHERE emp.managerId =?`,
      [id]
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

module.exports = {
  getManagers,
  viewEmployeesByManager,
};
