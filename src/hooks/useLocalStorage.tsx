import { useState } from 'react';

const useLocalStorage = <T,>(
  key: string,
  initialValue?: T
): [T, typeof setValue] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item && JSON.parse(item);
    } catch (error) {
      return initialValue && initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error('failed to set value');
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
