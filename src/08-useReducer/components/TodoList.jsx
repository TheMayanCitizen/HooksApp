import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        // TodoItem y pasar la informacion
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};
