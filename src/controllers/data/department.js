const viewAllDepartments = async (req, res) => {
  return res.send("view all departments");
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

const addDepartment = async (req, res) => {
  return res.send("add department");
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
