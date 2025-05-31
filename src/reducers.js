import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, FILTER_TODO } from './actions';

const initialState = {
  todos: [],
  filter: 'all', // all, done, notDone
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, description: action.payload.description } : todo
        ),
      };
    case FILTER_TODO:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default rootReducer;