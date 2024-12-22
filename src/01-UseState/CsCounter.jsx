import { useCounter } from "../hooks/useCounter";

export const CsCounter = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>CustomCounter: {counter}</h1>
      <button onClick={() => increment(2)}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => decrement(2)}>-1</button>
    </div>
  );
};
