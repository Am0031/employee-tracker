const startApp = require("./utils/server");
const getAnswers = require("./utils/getAnswers");
const { selectionQuestion } = require("./utils/questions");
const { getAllDepartments, getAllEmployees } = require("./utils/userQueries");

const init = async () => {
  startApp();
  //start inquirer cycle
  let inProgress = true;
  while (inProgress) {
    const { selection } = await getAnswers(selectionQuestion);

    if (selection === "viewAllDepartments") {
      await getAllDepartments();
    }
    if (selection === "viewAllEmployees") {
      await getAllEmployees();
    }

    if (selection === "quit") {
      inProgress = false;
      console.log(
        "Thank you for using the Employee Management System! Goodbye!"
      );
    }
  }
};

init();
