import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {
  const todos = { todos: state.todos };

  return todos;
};

const VisibleTodoList = connect(
  mapStateToProps,
)(TodoList);

export default VisibleTodoList;
