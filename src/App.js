import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    idCount: 0,
  }

  //addTodo
    addTodo(todoName){
      this.setState(prevState => {
        const newTodos = prevState.todos.slice().concat({
          name: todoName,
          id: prevState.idCount
        })
        return {
          todos: newTodos,
          idCount: prevState.ideCount + 1,
          input: ''
        }
      })
    }

  //deleteTodo
  deleteTodo(todoId){
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().filter( todo => todo.id !== todoId );
      return {
        todos: newTodos
      }
    })
  }

  render() {
    return (
      <div className='App'>
        <Card className="main-container">
            <TodoInput handleSubmit={this.addTodo.bind(this)}/>
            <TodoList data={this.state.todos} handleClick={this.deleteTodo.bind(this)}/>
        </Card>
      </div>
    );
  }
}

export default App;
