import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '@redux/stores';
import { fetchProductList } from '@redux/actions';
import { IProductList } from '@types';
import useLocalStorage from './useLocalStorage';

const useGetProductList = (): [IProductList | unknown, boolean] => {
  // @NOTE: 마운티드 되고 데이터를 받아서 localStorage에 저장
  // 이후부턴 직접 fetch 하지 않고, localStorage 값을 가져옴.

  const [storedValue, setValue] = useLocalStorage('productList');
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const productReducer = useSelector(
    (state: RootReducerType) => state.ProductReducer
  );

  useEffect(() => {
    if (!storedValue) {
      // @NOTE: localStorage 저장된 값이 null일 떄만 dispatch
      dispatch(fetchProductList());

      if (productReducer.success) {
        setValue(productReducer.productList);
        setIsError(false);
      } else {
        setIsError(true);
      }
    }
  }, [productReducer]);

  return [storedValue, isError];
};

export default useGetProductList;
