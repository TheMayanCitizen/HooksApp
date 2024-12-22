import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const UseCallback = () => {
  const [counter, setCounter] = useState(10);

  //Sirve para memorizar funciones sin que tenga que volver a renderizar el componente a donde se envia, en este caso, el setter, funciona como un useMemo pero para funciones
  const incrementFather = useCallback(
    //Si enviamos argumentos los recibimos aqui ()=>
    (value) => {
      setCounter((value) => value + 1);
    },
    []
  );

  return (
    <div>
      <h1>UseCallbakHook: {counter}</h1>
      <ShowIncrement incrementar={incrementFather} />
    </div>
  );
};
