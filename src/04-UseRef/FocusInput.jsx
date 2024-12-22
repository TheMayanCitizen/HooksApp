import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef();

  const onSetFocus = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <input type="text" placeholder="username" ref={inputRef} />

      <button onClick={onSetFocus}>Set Focus on Input</button>
    </div>
  );
};
