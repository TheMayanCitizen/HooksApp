import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onNewTodo = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime() * 2,
      done: false,
      description,
    };
    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <h4>Add Todo</h4>
      <hr />
      <form onSubmit={onNewTodo}>
        <input
          type="text"
          name="description"
          placeholder="Que hay que hacer?"
          onChange={onInputChange}
          value={description}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
