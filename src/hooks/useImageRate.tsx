import { useEffect, useState } from 'react';
import { getDiffOfImageRate } from '@utils/functions';

const useImageRate = (imageRef: React.RefObject<HTMLImageElement>) => {
  const [imageRate, setImageRate] = useState(0);

  useEffect(() => {
    setImageRate(() => getDiffOfImageRate(imageRef));
  }, []);

  return imageRate;
};

export default useImageRate;
