import { useState } from 'react';

const useLocalStorage = <T, K>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: K | ((value: K) => K)): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error('failed to set value');
    }
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
