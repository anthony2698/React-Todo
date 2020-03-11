import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

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

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
