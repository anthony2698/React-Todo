import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

import './components/Todo.css';

const todos =[];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  toggleCompleted = (clickedTodoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedTodoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        if(!todo.completed) {
          return todo
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
