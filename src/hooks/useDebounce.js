import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(interval);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
