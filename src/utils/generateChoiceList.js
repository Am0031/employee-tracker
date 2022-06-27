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

module.exports = { generateChoiceList, generateManagerList };
