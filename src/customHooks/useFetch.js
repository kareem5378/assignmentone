import { useState, useEffect } from "react";

function useFetch(url, refresh) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    getData();
  }, [url, refresh]);
  return { data, loading, error };
}
export default useFetch;
