import { useState, useCallback } from "react";

const useToggleArray = (initial = []) => {
  const [values, setValues] = useState(initial);

  const toggle = useCallback((id) => {
    setValues((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  }, []);

  const clear = useCallback(() => setValues([]), []);

  return [values, toggle, clear];
};

export default useToggleArray;