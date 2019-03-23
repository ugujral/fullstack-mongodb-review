import React, { Component } from 'react';
import TodoListEntry from './TodoListEntry.jsx';
import axios from 'axios';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      priority: 0,
      todos: [],
    };
    this.getTodos = this.getTodos.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get('/api/todos')
      .then((response) => {
        this.setState({
          todos: response.data,
        });
      })
      .catch(error => console.log(error));
  }

  postTodo() {
    const { todo, priority } = this.state;
    axios.post('/api/todos', { name: todo, priority })
      .then(() => {
        this.getTodos();
      })
      .catch(error => console.log(error));
  }

  deleteTodo(_id) {
    axios.delete(`/api/todos/${_id}`)
      .then(() => {
        this.getTodos();
      })
      .catch(error => console.log(error));
  }

  updateTodo(index, change) {
    const target = this.state.todos[index];
    const _id = target._id;
    const newPriority = target.priority + change;
    axios.put(`/api/todos/${_id}`, { priority: newPriority })
      .then(() => {
        this.getTodos();
      })
      .catch(error => console.log(error));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postTodo();
    // const { todo, priority, todos } = this.state;
    // const newTodos = [...todos];
    // newTodos.push({ todo, priority });
    // this.setState({
    //   todos: newTodos,
    // }, () => console.log(this.state));
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    }, () => console.log(this.state));
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <form>
          Todo:
          <input type="text" name="todo" onChange={this.handleChange} />
          Priority:
          <input type="number" name="priority" onChange={this.handleChange} />
          <button type="button" onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
        <div>
          {todos.map((todo, index) => (
            <TodoListEntry
              key={index}
              index={index}
              todo={todo}
              deleteTodo={this.deleteTodo}
              updateTodo={this.updateTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}
