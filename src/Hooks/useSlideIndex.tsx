import { useEffect, useState } from "react";

const useSlideIndex = (length: number, intervalMs = 8000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length === 0) return;
    const id = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);
  return index;
};

export default useSlideIndex;
