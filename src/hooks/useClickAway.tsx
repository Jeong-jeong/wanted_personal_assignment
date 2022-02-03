import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateActivedId } from '@redux/actions';
import useGetProductList from './useGetProductList';

const useClickAway = (): void => {
  const dispatch = useDispatch();
  const [storedValue, isError] = useGetProductList();

  const countClickRef = useRef(0);
  const saveClickedId = useRef(storedValue.activedId);

  useEffect(() => {
    const listener = (event: any) => {
      // @FIXME: useGetProductList 로직으로 인해 두번씩 호출됨.

      const target = event.target.closest('.toggle');
      const clickedId = target ? +target.dataset.id : 0;
      ++countClickRef.current;
      if (saveClickedId.current === clickedId && countClickRef.current === 2) {
        dispatch(updateActivedId(0));
      }
      if (saveClickedId.current !== clickedId || countClickRef.current === 1) {
        dispatch(updateActivedId(clickedId));
      }
      if (countClickRef.current === 2) {
        countClickRef.current = 0;
      }
      saveClickedId.current = clickedId;
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);
};

export default useClickAway;
