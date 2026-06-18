import { useState, useCallback } from "react";

const useToggleArray = <T = number>(initial: T[] = []): [T[], (id: T) => void, () => void] => {
  const [values, setValues] = useState<T[]>(initial);

  const toggle = useCallback((id: T) => {
    setValues((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  }, []);

  const clear = useCallback(() => setValues([]), []);

  return [values, toggle, clear];
};

export default useToggleArray;
