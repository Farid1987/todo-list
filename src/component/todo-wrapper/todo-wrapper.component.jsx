import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../todo-list/todo-list.component';
import { selectTodoItems } from '../../redux/todo/todo.selectors';

import './todo-wrapper.styles.scss';

const TodoWrapper = ({ todoItems }) => {
  return (
    <div className="todo-wrapper">
      {
        todoItems.map((todo, index) => (
          <TodoList key={index} {...todo} id={index}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  todoItems: selectTodoItems(state)
})

export default connect(mapStateToProps)(TodoWrapper);