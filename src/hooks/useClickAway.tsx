import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateDataSet } from '@redux/actions';

const useClickAway = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = (event: any) => {
      const target = event.target.closest('.toggle');
      const clickedId = target ? +target.dataset.id : 0;
      const clickedSwipeIndex = target && +target.dataset.swipeIndex;
      dispatch(updateDataSet({ clickedId, clickedSwipeIndex }));
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);
};

export default useClickAway;
