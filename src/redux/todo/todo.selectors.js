import { createSelector } from 'reselect';

const selectTodos = state => state.todos;

export const selectTodoItems = createSelector(
  [selectTodos],
  todos => todos.todoItems
)