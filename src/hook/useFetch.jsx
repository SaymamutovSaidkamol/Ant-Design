import { api } from "@/api";
import { useState, useEffect } from "react";

export const useFetch = (endpoint, params = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(endpoint, { params })
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response?.data || err.message);
        setData(null);
      })

      .finally(() => setLoading(false));
  }, [endpoint, JSON.stringify(params)]);

  return { data, error, loading };
};
