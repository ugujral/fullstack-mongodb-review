import React from 'react';
import axios from 'axios';

import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: '',
      priority: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getItems = this.getItems.bind(this);
    this.postItems = this.postItems.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  componentDidMount() {
    this.getItems();
  };

  getItems() {
    axios
      .get('/api/todos')
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
      .catch(err => console.error(err));
  };

  postItems() {
    const { name, priority } = this.state;
    axios
      .post('/api/todos', { name, priority })
      .then(() => {
        this.getItems();
      })
      .catch(err => console.error(err));
  };

  handleChange(e) {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    this.setState({
      [key]: value
    },() => console.log(this.state));
  };

  handleSubmit(e) {
    e.preventDefault();
    this.postItems()
    // const { todos, name, priority } = this.state;
    // const newTodos = [...todos];
    // newTodos.push({ name, priority });
    // this.setState({
    //   todos: newTodos
    // }, () => console.log(this.state));
  };

  handleEdit(index, change) {
    const target = this.state.todos[index];
    // console.log('TARGET: ', target)
    const _id = target._id;
    // console.log('ID: ', _id)
    const newPriority = target.priority + change;
    // console.log('NEW PRIORITY: ', newPriority)
    axios
      .put(`/api/todos/${_id}`, { priority: newPriority })
      .then(() => {
        this.getItems();
      })
      .catch(err => console.error(err));
  };

  handleDelete(_id) {
    axios
      .delete(`/api/todos/${_id}`)
      .then(() => {
        this.getItems();
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <form>
          Todo:
          <input type='text' name='name' onChange={this.handleChange}></input>
          Priority:
          <input type='number' name='priority' onChange={this.handleChange}></input>
          <button type='button' onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
        <h4>All Todos:</h4>
        <List todos={this.state.todos} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
      </div>
    )
  };
};

export default App;