import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formData, setFormData] = useState({
    username: "aletz",
    email: "altez@mail.com",
  });

  const { username, email } = formData;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Simple Form Papus</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="username"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {formData.username === "aletz2" && <Message />}
    </div>
  );
};
