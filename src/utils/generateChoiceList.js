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
      name: `${each.firstName} ${each.lastName}`,
    };
  };
  return array.map(getManagerInfo);
};

module.exports = {
  generateChoiceList,
  generateEmployeeList,
};
