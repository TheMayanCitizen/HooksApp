// import { useEffect, useReducer } from "react";
// import { todoReducer } from "./todoReducer";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd, TodoList } from "./components";

export const TodoApp = () => {
  const {
    todoList,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp {todosCount}, <small>Pendientes:{pendingTodosCount}</small>
      </h1>
      <hr />

      <div>
        <div>
          {/* Todo list */}
          <TodoList
            todoList={todoList}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
          {/* Fin todolist */}
        </div>
        <div>
          {/* TodoAdd solo el formulario, onNewTodo(todo), */}
          {/* {id:new Date(), description, done: false} */}
          <TodoAdd handleNewTodo={handleNewTodo} />
          {/* Fin del formulario */}
        </div>
      </div>
    </>
  );
};
