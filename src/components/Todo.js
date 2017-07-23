import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li // eslint-disable-line jsx-a11y/no-static-element-interactions
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
