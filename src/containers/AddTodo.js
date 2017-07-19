import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/action';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={(node) => { input = node; }} />
      <button onClick={() => { dispatch(addTodo(input.value)); input.value = ''; }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: React.PropTypes.string.isRequired,
};

export default connect()(AddTodo);
