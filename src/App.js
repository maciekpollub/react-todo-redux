import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Grid from 'material-ui/Grid';
import TasksList from './components/TasksList';
import tasksReducer from './components/state';

class App extends Component {
  render() {

    const reducers = combineReducers({
      tasks: tasksReducer
    });
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <Grid container>
          <Grid item xs={12}>
            <TasksList/>
          </Grid>
        </Grid>
      </Provider>
    );
  }
}

export default App;
