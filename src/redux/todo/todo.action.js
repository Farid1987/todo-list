import TodoActionTypes from './todo.types.js';

export const addTodo = (item) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: item
})

export const removeTodo = (key) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: key
})

export const toggleCompleteTodo = (key) => ({
  type: TodoActionTypes.TOGGLE_COMPLETE_TODO,
  payload: key
})