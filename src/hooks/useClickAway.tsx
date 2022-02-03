import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateActivedId } from '@redux/actions';

const useClickAway = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = (event: any) => {
      const target = event.target.closest('.toggle');
      const clickedId = target ? +target.dataset.id : 0;
      dispatch(updateActivedId(clickedId));
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);
};

export default useClickAway;
