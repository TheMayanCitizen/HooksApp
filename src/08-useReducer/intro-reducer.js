const initialState = [
  {
    id: 1,
    todo: "Do something",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "do more stuff",
  done: false,
};

const addNewTodo = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addNewTodo);

console.log(todos);
