import { useForm } from "../hooks/useForm";

export const CsForm = () => {
  const { formData, onInputChange, email, password, username, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <div>
      <h2>Custom Form</h2>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onInputChange}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
        placeholder="password"
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={onInputChange}
      />

      <button onClick={onResetForm}>Reset Form</button>
    </div>
  );
};
