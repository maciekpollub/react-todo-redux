import React from 'react';
import Grid from 'material-ui/Grid';

import TasksContainer from './components/TasksContainer';

const App = () => (
  <Grid container>
    <Grid item xs={12}>
      <TasksContainer/>
    </Grid>
  </Grid>
);

export default App;
