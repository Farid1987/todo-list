import React from 'react';
import { connect } from 'react-redux';

import { removeTodo, toggleCompleteTodo } from '../../redux/todo/todo.action';

import './todo-list.styles.scss';

const TodoList = ({ name, done, removeTodo, toggleCompleteTodo, id }) => {
  return (
    <div className={`todo-list__item ${done ? 'done':''}`}>
      <div className="todo-list__name" onClick={() => toggleCompleteTodo(id)}>{name}</div>

      <div className="todo-list__remove" onClick={() => removeTodo(id)}>
        <i className="fa fa-trash"></i>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (key) => dispatch(removeTodo(key)),
  toggleCompleteTodo: (key) => dispatch(toggleCompleteTodo(key))
})

export default connect(null, mapDispatchToProps)(TodoList);
