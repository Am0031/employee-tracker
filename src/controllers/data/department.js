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

const deleteDepartment = async (req, res) => {
  return res.send("delete department");
  // try {
  //   const [departments] = await req.db.query("SELECT * FROM departments");

  //   return res.json({
  //     success: true,
  //     data: departments,
  //   });
  // } catch (error) {
  //   console.log(`[ERROR: Failed to get departments | ${error.message}]`);

  //   return res.status(500).json({
  //     success: false,
  //     error: "Failed to get departments",
  //   });
  // }
};

module.exports = { viewAllDepartments, addDepartment, deleteDepartment };
