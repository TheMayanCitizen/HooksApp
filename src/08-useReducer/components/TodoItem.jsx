export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <li>
      <span
        onClick={() => handleToggleTodo(todo.id)}
        className={todo.done ? "line-through" : ""}
      >
        {todo.description}
      </span>
      <button onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
    </li>
  );
};
