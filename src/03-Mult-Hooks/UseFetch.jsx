import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const UseFetch = () => {
  const { counter, increment, decrement } = useCounter(1);
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, isLoading, hasError } = useFetch(url);

  return (
    <div>
      <h2>Pokemon API</h2>

      {isLoading && <p>Cargando....</p>}
      {/* <pre>{JSON.stringify(data, " ", 2)}</pre> */}
      <h3>{data?.name}</h3>

      <button onClick={() => (counter > 1 ? decrement() : null)}>
        Anterior
      </button>
      <button onClick={() => increment()}>Siguiente</button>
    </div>
  );
};
