//build the row for a table
const createRowHtml = (each) => {
  const content = Object.values(each)
    .map((v) => `<td>${v}</td>`)
    .join("");
  return `<tr>
    ${content}
  </tr>`;
};

//static string for html head section
const createHeadHtml = () => {
  return `<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Company Report</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    </head>`;
};

//static string for header
const headerHtml = `<header class="jumbotron jumbotron-fluid header-title mb-0">
 <div class="container">
   <h1 class="display-3 text-center">Company Report</h1>
 </div>
 </header>`;

//create string for department table section
const createDepartmentHtml = (departments) => {
  return departments.length === 0
    ? `<section
  class="departments-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
  id="departments-section">
  <div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
No departments </div></section>`
    : `<section
      class="departments-container d-flex flex-column align-items-center separator"
      id="departments-section">
      <h1 class="display-4">Departments</h1>
      <table class="table"><thead class="thead-light"><tr>
    <th scope="col">ID</th>
    <th scope="col">Department Name</th>
    </tr></thead>
    <tbody>
      ${departments.map((department) => createRowHtml(department)).join("")}
    </tbody></table>
    </section>`;
};

//create string for role table section
const createRoleHtml = (roles) => {
  return roles.length === 0
    ? `<section
    class="roles-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
    id="roles-section">
    <div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
  No roles </div></section>`
    : `<section
  class="roles-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
  id="roles-section">
  <h1 class="display-4">Roles</h1>
    <table class="table"><thead class="thead-light"><tr>
    <th>ID</th>
    <th>Title</th>
    <th>Salary</th>
    <th>Department</th>
  </tr></thead>
  <tbody>
  ${roles.map((role) => createRowHtml(role)).join("")}
</tbody></table>
</section>`;
};

//create string for employee table section
const createEmployeeHtml = (employees) => {
  return employees.length === 0
    ? `<section
    class="employees-container d-flex flex-row flex-wrap justify-content-around align-items-center"
    id="employees-section">
    <div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
  No employees </div></section>`
    : `<section
    class="employees-container d-flex flex-row flex-wrap justify-content-around align-items-center"
    id="employees-section">
    <h1 class="display-4">Employees</h1>
    <table class="table"><thead class="thead-light"><tr>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Role</th>
    <th>Manager</th>
  </tr></thead>
  <tbody>
  ${employees.map((employee) => createRowHtml(employee)).join("")}
</tbody></table>  
  </section>`;
};

//static string for footer
const footerHtml = `<footer class="footer p-3">
<div class="footer-text w-100 text-center">&copy; 2022 Copyright</div>
</footer>`;

module.exports = {
  createHeadHtml,
  headerHtml,
  createDepartmentHtml,
  createRoleHtml,
  createEmployeeHtml,
  footerHtml,
};
