import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class TodoInput extends Component {

  state = {
    input: ''
  }

  render() {
    return (
      <TextField
          className="add-todo-input"
            type='text'
            value={this.state.input}
            onChange={e =>
              this.setState({input: e.target.value})
            }
            label="Enter something todo."
            onKeyPress={e => {
              if(e.key=='Enter'){
                this.props.handleSubmit(this.state.input);
                this.setState({
                  input: ''
                })
              }
            }}>
      </TextField>
    );
  }
}

export default TodoInput;
