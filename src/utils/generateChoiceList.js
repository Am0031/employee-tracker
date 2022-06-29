//generate a list of choices for secondary questions - for departments, roles, managers lists
const generateChoiceList = (array, name) => {
  return array.map((each) => {
    return {
      name: each[name],
      value: each.id,
    };
  });
};

//generate a list of all employees' names only
const generateEmployeeList = (array) => {
  const getNameInfo = (each) => {
    return {
      value: each.id,
      name: `${each.First_Name} ${each.Last_Name}`,
    };
  };
  return array.map(getNameInfo);
};

module.exports = {
  generateChoiceList,
  generateEmployeeList,
};
