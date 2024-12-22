import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      {user && JSON.stringify(user, null, 3)}

      <button
        onClick={() =>
          setUser({
            id: 123,
            name: "aletz",
            age: 31,
          })
        }
      >
        Mostrar Usuario
      </button>
    </>
  );
};
