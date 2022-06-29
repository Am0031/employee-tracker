const generateChoiceList = (array, name) => {
  return array.map((each) => {
    return {
      name: each[name],
      value: each.id,
    };
  });
};

const generateEmployeeList = (array) => {
  const getManagerInfo = (each) => {
    return {
      value: each.id,
      name: `${each.First_Name} ${each.Last_Name}`,
    };
  };
  return array.map(getManagerInfo);
};

module.exports = {
  generateChoiceList,
  generateEmployeeList,
};
