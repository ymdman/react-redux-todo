import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/action';

const mapStateToProps = (state) => {
  const todos = { todos: state.todos };

  return todos;
};

const mapDispatchToProps = (dispatch) => {
  const onTodoClick = {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };

  return onTodoClick;
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
