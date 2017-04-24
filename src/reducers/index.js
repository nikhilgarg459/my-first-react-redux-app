import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const toDoApp = combineReducers({
  todos,
  visibilityFilter
});

export default toDoApp;