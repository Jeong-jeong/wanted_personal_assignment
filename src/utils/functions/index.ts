export const getStorageValue = <T>(key: string, initialState: T) => {
  const getStorageValue = window.localStorage.getItem(key);
  return getStorageValue ? JSON.parse(getStorageValue) : initialState;
};

export const checkSameId = (id1: number | undefined, id2: number): boolean =>
  id1 === id2;
