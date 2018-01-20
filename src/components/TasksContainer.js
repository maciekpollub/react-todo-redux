import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import TaskList from './TasksList';
import { add, search, remove } from './state';

const mapStateToProps = state => ({
  tasksList: state.tasks.tasks,
  query: state.tasks.query
});

const mapDispatchToProps = dispatch => ({
  addNewTask: task => dispatch(add(task)),
  searchTask: value => dispatch(search(value)),
  removeTask: task => dispatch(remove(task))
});

class TasksList extends Component {

  state = {
    task: ''
  }

  handleChange = event => {
    this.setState({ task: event.target.value });
  }

  handleSearchChange = event => {
    this.props.searchTask(event.target.value);
  }

  handleClick = event => {
    this.props.addNewTask(this.state.task);
  }

  handleRemove = task => {
    this.props.removeTask(task);
  }

  render() {
    return (
      <div>
        <div>
          <TextField value={this.state.task} onChange={this.handleChange}/>
          <Button onClick={this.handleClick}>Add task</Button>
        </div>
        <div>
          <TextField placeholder="Seearch" onChange={this.handleSearchChange}/>
        </div>
        <TaskList
          tasks={this.props.tasksList}
          query={this.props.query}
          onDelete={this.handleRemove}
        />
      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
