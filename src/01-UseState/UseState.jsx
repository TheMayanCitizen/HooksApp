import { useState } from "react";

export const UseState = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  return (
    <>
      <h1>counter1: {counter1}</h1>
      <h1>counter2: {counter2}</h1>
      <h1>counter3: {counter3}</h1>

      <button
        onClick={() =>
          setCounter((prev) => ({ ...prev, counter1: counter1 + 1 }))
        }
      >
        +1
      </button>
    </>
  );
};
