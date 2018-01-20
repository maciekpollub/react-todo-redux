import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui-icons/Delete';

class Task extends React.Component {

  state = {
    checked: false
  }

  handleChange = (event) => {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        {this.props.name}
        <DeleteIcon
          onClick={this.props.onDelete}/>
      </div>
    );
  }

}

export default Task;
