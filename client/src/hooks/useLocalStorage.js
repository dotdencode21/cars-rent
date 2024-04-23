import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue = "") => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (!!storedValue) {
      return JSON.parse(storedValue);
    }

    return typeof defaultValue !== "string"
      ? JSON.stringify(defaultValue)
      : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
