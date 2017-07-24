const setVisibilityFilter = (filter) => {
  const data = {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };

  return data;
};

export default setVisibilityFilter;
