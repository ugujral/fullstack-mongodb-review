import React from 'react';

const ListEntry = (props) => {
  return (
    <div>
      {props.todo.name}
      <br />
      {props.todo.priority}
      <button type='button' onClick={() => props.handleDelete(props.todo._id)}>Delete</button>
      <button type='button' onClick={() => props.handleEdit(props.index, 1)}>+</button>
      <button type='button' onClick={() => props.handleEdit(props.index, -1)}>-</button>
    </div>
  )
};

export default ListEntry;