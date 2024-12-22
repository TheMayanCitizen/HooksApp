import { useEffect, useState } from "react";

export const Message = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoord({ x, y });
      console.log(x, y);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Ususario ya existe</h2>
      <p>{JSON.stringify(coord)}</p>
    </div>
  );
};
