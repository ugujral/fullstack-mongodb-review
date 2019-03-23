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
              todo={todo.name}
              priority={todo.priority}
            />
          ))}
        </div>
      </div>
    );
  }
}
