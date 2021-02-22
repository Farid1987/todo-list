export const removeTodo = (todoItems, keyToRemove) => {
  let temp = todoItems;
  temp.splice(keyToRemove, 1);
  return [...temp]
}