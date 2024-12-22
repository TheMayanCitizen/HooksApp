import { useEffect, useState } from "react";

//TanStack Query se puede usar para manejar peticiones http

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getPokemonData();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getPokemonData = async () => {
    if (localCache[url]) {
      console.log("Usando Cache");
      setState({
        data: localCache[url],
        isLoading: true,
        hasError: false,
        error: null,
      });
      return;
    }
    setLoadingState();
    const resp = await fetch(url);

    //sleep:Para que tarde un poquito mas en cargar
    await new Promise((resp) => setTimeout(resp, 800));

    if (!resp.ok) {
      setState({
        ...state,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }
    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    localCache[url] = data;

    // console.log({ data });
  };

  return { ...state };
};
