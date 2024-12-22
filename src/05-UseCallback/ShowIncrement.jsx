export const ShowIncrement = ({ incrementar }) => {
  return (
    <button
      onClick={() => incrementar(5)} //Aqui enviamos los argumentos a useCallback
    >
      Incrementar
    </button>
  );
};
