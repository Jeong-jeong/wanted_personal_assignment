import { useEffect } from 'react';
import { ImageViewContent, ImageViewSwiper } from '@components/domain';
import { useGetProductList } from '@hooks';

const StarView = () => {
  const [storedValue, isError] = useGetProductList();

  useEffect(() => {
    console.log(storedValue);
  }, [storedValue]);

  return (
    <div>
      <ImageViewContent storedValue={storedValue} />
      <ImageViewSwiper storedValue={storedValue} />
    </div>
  );
};

export default StarView;
