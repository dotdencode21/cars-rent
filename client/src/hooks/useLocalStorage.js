import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || JSON.stringify(defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue];
};