//requiring functions to create strings
const {
  createHeadHtml,
  headerHtml,
  createDepartmentHtml,
  createRoleHtml,
  createEmployeeHtml,
  footerHtml,
} = require("./createStringHtml");

//main function to generate the overall html string
const generateHtml = (departments, roles, employees) => {
  //main call to generate the section strings
  const headHtml = createHeadHtml("Team Profile");
  const departmentHtml = createDepartmentHtml(departments);
  const roleHtml = createRoleHtml(roles);
  const employeeHtml = createEmployeeHtml(employees);

  //return the overall string for a complete html file
  return ` <!DOCTYPE html>
  <html>
  ${headHtml}
  <body>
  ${headerHtml}
  <main class="main" id="main">
  ${departmentHtml}
  ${roleHtml}
  ${employeeHtml}
  </main>
  ${footerHtml}
  </body>
    </html>
  `;
};

module.exports = generateHtml;
