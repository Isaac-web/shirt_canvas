import { useEffect, useState } from "react";

const useFetch = (url = "http://localhost:3000/api/orders", options = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    try {
      const res = await fetch(url, {
        cache: "no-store",
        ...options,
      });

      const resBody = await res.json();
      setData(resBody);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    makeRequest();
  }, []);

  return { isLoading, data, error };
};

export default useFetch;
