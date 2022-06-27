const getManagers = async (req, res) => {
  try {
    const [managers] = await req.db.query(
      `SELECT employees.id, employees.firstName, employees.lastName
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

module.exports = {
  getManagers,
};
