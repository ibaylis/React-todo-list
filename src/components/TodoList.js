import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

class TodoList extends Component {

    render() {
      return (
        <React.Fragment>
          {/*<button onClick={this.addTodo.bind(this, this.state.input)}>add todo</button> */}
          <List>
            {this.props.data.map(todo =>
                <ListItem key={todo.id}>
                      <Icon>drag_handle</Icon>
                  <ListItemText
                    primary={todo.name}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => {this.props.handleClick(todo.id)}}>
                      <Icon>delete</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              //<li key={todo.id}>{todo.name} <button onClick={this.deleteTodo.bind(this, todo.id)}> remove</button></li>
            )}
          </List>
        </React.Fragment>
      );
    }
}

export default TodoList;
