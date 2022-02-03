import React from 'react';
import { IProductListProps, IProductItem } from '@types';
import { Box } from '@components/base';

const ImageViewSwiper = ({ storedValue }: IProductListProps) => {
  return (
    <>
      {React.Children.toArray(
        storedValue?.productList?.map((item: IProductItem) => (
          <Box productItem={item} activedId={storedValue?.activedId} />
        ))
      )}
    </>
  );
};

export default ImageViewSwiper;
