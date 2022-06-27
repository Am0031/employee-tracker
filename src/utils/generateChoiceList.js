const generateChoiceList = (array, name) => {
  return array.map((each) => {
    return {
      name: each[name],
      id: each.id,
    };
  });
};

const generateManagerList = (array) => {
  const getManagerInfo = (each) => {
    const index = array.findIndex((element) => element.id === each);
    return {
      id: array[index].id,
      name: `${array[index].firstName} ${array[index.lastName]}`,
    };
  };
  const managerId = array
    .filter((m) => m.managerId !== "null")
    .map((m) => m.managerId);
  return managerId.map(getManagerInfo);
};

const generateEmployeeList = (array) => {
  const getManagerInfo = (each) => {
    return {
      id: each.id,
      name: `${each.firstName} ${each.lastName}`,
    };
  };
  return array.map(getManagerInfo);
};

module.exports = {
  generateChoiceList,
  generateManagerList,
  generateEmployeeList,
};