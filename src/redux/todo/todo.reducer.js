import TodoActionTypes from './todo.types';
import { removeTodo } from './todo.utils';

const INITIAL_STATE = {
  todoItems: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload]
      }
    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todoItems: removeTodo(state.todoItems, action.payload)
      }
    case TodoActionTypes.TOGGLE_COMPLETE_TODO:
      return {
        ...state,
        todoItems: state.todoItems.map((todo, index) => 
          action.payload === index ? {...todo, done: !todo.done} : todo,
        )
      }
    default:
      return state
  }
}

export default todoReducer;