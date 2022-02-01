import { useState, useEffect } from 'react';

const useCheckSameId = (activedId: number, productId: number): [boolean] => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (activedId === productId) {
      setIsActive(true);
    } else setIsActive(false);
  }, [activedId, productId]);

  return [isActive];
};

export default useCheckSameId;
