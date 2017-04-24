import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

const mapStateToTodoListProps = (state) => ({
    todos: getVisibleTodos (
      state.todos,
      state.visibilityFilter
    )
  });

const mapDispatchToTodoListProps = (dispatch) => ({
    onTodoClick(id){
      dispatch(toggleTodo(id));
    }
  });

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;