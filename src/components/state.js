const ADD_TASK = 'ADD_TASK';
const FILTER_TASKS = 'FILTER_TASKS';
const REMOVE_TASK = 'REMOVE_TASK';
const INIT_DATA = 'INIT_DATA';
const PULL_TASKS = 'PULL_TASKS';

export const initData = () => (dispatch) => {
  fetch('http://sdfsdfdsfds')
    .then(response => response.json())
    .then(data => {
      dispatch(pullTasks(data))
    })
    .catch(() => {
      dispatch()
    })
};

export const addTask = (taskName) => ({
  type: ADD_TASK,
  task: taskName
});

export const search = (value) => ({
  type: FILTER_TASKS,
  value: value
});

export const removeTask = (index) => ({
  type: REMOVE_TASK,
  taskIndex: index
});

export const pullTasks = (tasks) => ({
  type: PULL_TASKS,
  data: tasks
});

const INITIAL_STATE = {
  query: '',
  tasks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PULL_TASKS:
      return {
        ...state,
        tasks: action.data
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.task)
      }
    case FILTER_TASKS:
      return {
        ...state,
        query: action.value
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, iterationIndex) => action.taskIndex !== iterationIndex)
      }
    default:
      return state;
  }
}