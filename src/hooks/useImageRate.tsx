import { useEffect, useState } from 'react';
import { roundOfNumToONe } from '@utils/functions';

const useImageRate = (imageRef: React.RefObject<HTMLImageElement>) => {
  const [imageRate, setImageRate] = useState(0);

  useEffect(() => {
    const originImageSize = {
      width: imageRef?.current?.naturalWidth || 0,
      height: imageRef?.current?.naturalHeight || 0,
    };

    const renderedImageSize = {
      width: imageRef?.current?.clientWidth || 0,
      height: imageRef?.current?.clientHeight || 0,
    };

    const differenceOfRate = {
      width: roundOfNumToONe(renderedImageSize.width / originImageSize.width),
      height: roundOfNumToONe(
        renderedImageSize.height / originImageSize.height
      ),
    };

    setImageRate(differenceOfRate.width + differenceOfRate.height);
  }, [imageRef.current]);

  return imageRate;
};

export default useImageRate;
