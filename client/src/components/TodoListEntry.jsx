import React from 'react';

const TodoListEntry = (props) => {
  const { todo, deleteTodo } = props;
  return (
    <div>
      {todo.priority}
      {todo.name}
      <button type="button" onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoListEntry;
