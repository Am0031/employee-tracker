const viewAllRoles = async (req, res) => {
  try {
    const [roles] = await req.db.query("SELECT * FROM roles");

    return res.json({
      success: true,
      data: roles,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get roles | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get roles",
    });
  }
};

const addRole = async (req, res) => {
  try {
    const payload = req.body;

    await req.db.query(
      "INSERT INTO roles (title, salary, depId) VALUES (?, ?, ?)",
      [payload.title, payload.salary, payload.depId]
    );

    return res.json({
      success: true,
      message: "role successfully added",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to add role | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to add role",
    });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    await req.db.query("DELETE FROM roles WHERE id=?", [id]);

    return res.json({
      success: true,
      message: "role successfully deleted",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to remove role | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to remove role",
    });
  }
};

module.exports = { viewAllRoles, addRole, deleteRole };
