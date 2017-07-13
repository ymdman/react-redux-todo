import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers';
import App from './components/App';
import addTodo from './actions/action';

const store = createStore(todo);

store.dispatch(addTodo('Hello World!'));
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
