let nextTodoId = 0;

const addTodo = (text) => {
  const data = {
    type: 'ADD_TODO',
    id: nextTodoId += 1,
    text,
  };

  return data;
};

export default addTodo;
