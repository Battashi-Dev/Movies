import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  dates: string;
  page: string;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, useData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => useData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useData;
