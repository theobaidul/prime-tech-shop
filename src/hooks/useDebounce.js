import { useEffect, useRef } from 'react';

export default function useDebounce() {
  const timeoutId = useRef(null);

  const debounce = (cb, delay = 500) => {
    if (timeoutId?.current) {
      clearTimeout(timeoutId?.current);
    }
    timeoutId.current = setTimeout(cb, delay);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId?.current);
  }, []);

  return debounce;
}
