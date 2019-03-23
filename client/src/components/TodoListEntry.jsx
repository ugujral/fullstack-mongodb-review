import React from 'react';

const TodoListEntry = (props) => {
  const { todo, index, deleteTodo, updateTodo } = props;
  return (
    <div>
      {todo.priority}
      {todo.name}
      <button type="button" onClick={() => deleteTodo(todo._id)}>Delete</button>
      <button type="button" onClick={() => updateTodo(index, 1)}>+</button>
      <button type="button" onClick={() => updateTodo(index, -1)}>-</button>
    </div>
  );
};

export default TodoListEntry;
