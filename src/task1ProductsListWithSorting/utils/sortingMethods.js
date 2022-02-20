export const defaultSorting = function (list) {
  return sortByType('id', list);
};

export const sortByType = function (sortingType, products) {
  return [...products].sort((a, b) => {
    return a[sortingType] - b[sortingType];
  });
};
