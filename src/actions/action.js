let nextTodoId = 0;

const addTodo = (text) => {
  const data = {
    type: 'ADD_TODO',
    id: nextTodoId += 1,
    text,
  };

  return data;
};

const toggleTodo = (id) => {
  const data = {
    type: 'TOGGLE_TODO',
    id,
  };

  return data;
};

export { addTodo, toggleTodo };
