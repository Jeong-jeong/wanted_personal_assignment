import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '@redux/stores';
import { fetchProductList } from '@redux/actions';
import { IProductList } from '@types';
import useLocalStorage from './useLocalStorage';
import { getProductListKey } from '@utils/constants';

const useGetProductList = (): [IProductList, boolean] => {
  // @NOTE: localStorage에 데이터가 없을 때만 dispatch, 있을 땐 재사용
  const [storedValue, setValue] = useLocalStorage(getProductListKey);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const productReducer = useSelector(
    (state: RootReducerType) => state.ProductReducer
  );
  useEffect(() => {
    if (!storedValue?.productList || !storedValue) {
      // @NOTE: localStorage 저장된 값이 null일 때만 dispatch
      dispatch(fetchProductList());
    }
  }, [storedValue]);

  useEffect(() => {
    try {
      if (productReducer.success) {
        setValue(productReducer.productList);
        setIsError(false);
      }
    } catch (error) {
      setIsError(true);
    }
  }, [productReducer]);

  return [storedValue, isError];
};

export default useGetProductList;
