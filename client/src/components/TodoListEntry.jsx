import React from 'react';

const TodoListEntry = (props) => {
  const { todo, priority } = props;
  return (
    <div>
      {priority}
      {todo}
    </div>
  );
};

export default TodoListEntry;
