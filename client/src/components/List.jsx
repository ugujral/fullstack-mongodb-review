import React from 'react';

import ListEntry from './ListEntry.jsx';

const List = (props) => (
  <div>
    {props.todos.map((todo, index) => (
      <ListEntry todo={todo} key={index} index={index} handleEdit={props.handleEdit} handleDelete={props.handleDelete} />
    ))}
  </div>
);

export default List;