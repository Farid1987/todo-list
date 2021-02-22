import React from 'react';
import { connect } from 'react-redux';

import useInput from '../../hooks/useInput.js';
import { addTodo } from '../../redux/todo/todo.action.js';

import './todo-form.styles.scss';

const TodoForm = ({ addTodo }) => {
  const {resetValue, ...text} = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {name: text.value, done: false};
    addTodo(item)
    resetValue('');
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input className="form-control" type="text" name="text" {...text} />
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (item) => dispatch(addTodo(item))
})

export default connect(null, mapDispatchToProps)(TodoForm);