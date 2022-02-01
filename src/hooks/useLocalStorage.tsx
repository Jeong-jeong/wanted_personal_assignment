import { useState } from 'react';
import { getStorageValue } from '@utils/functions';

const useLocalStorage = <T, K>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      return getStorageValue(key, initialValue);
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
