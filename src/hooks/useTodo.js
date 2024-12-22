import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todoList, dispatchTodoList] = useReducer(
    todoReducer,
    [], // o podemos tomarlo desde nuestra constante initialState
    init
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };
    dispatchTodoList(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodoList({
      type: "[TODO] Delete todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodoList({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };

  return {
    todoList,
    todosCount: todoList.length,
    pendingTodosCount: todoList.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
