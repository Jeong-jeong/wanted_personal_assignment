import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { theme } from '@styles';

const useSwipe = (dataLength: number, clickedSwipeIndex: number) => {
  const swipeRef = useRef<HTMLDivElement>(null);
  const lastPositionXRef = useRef(0);
  const currentIndexRef = useRef(0);
  const [isTransition, setIsTransition] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeStartX, setSwipeStartX] = useState(0);
  const [swipeEndX, setSwipeEndX] = useState(0);
  const [overflowedX, setDragOverflowedX] = useState(0);

  const getBoxWidth = () => theme.size.boxWidth + theme.gap.box * 2;
  const boxWidth = useMemo(
    () => getBoxWidth(),
    [theme.size.boxWidth, theme.gap.box]
  );

  useEffect(() => {
    // @NOTE: Tooltip / Box가 클릭될 때마다 해당하는 인덱스로 위치시킴
    switch (clickedSwipeIndex) {
      case dataLength - 1:
        setPosition(-overflowedX);
        break;
      case 0:
        setPosition(0);
        break;
      default:
        '';
    }
    temporaryTransition(300);
  }, [clickedSwipeIndex]);

  useEffect(() => {
    //@NOTE: 드래그 될 때마다 transform 위치 변경
    if (!swipeRef.current) return;
    if (swipeRef.current && isDragging) {
      setPosition(lastPositionXRef.current - (swipeStartX - swipeEndX));
    }
  }, [swipeEndX]);

  useEffect(() => {
    // @NOTE: mounted 후 swipeRef 값을 참조하기 위해 useEffect 활용
    if (swipeRef.current) {
      const overflowedX =
        swipeRef.current?.scrollWidth -
        theme.size.boxWidth * dataLength -
        theme.gap.swiper * 2;

      setDragOverflowedX(overflowedX);
    }
  }, [swipeRef.current]);

  const setPosition = (scrolledValue: number) => {
    if (swipeRef.current) {
      swipeRef.current.style.transform = `
			translate3d(${scrolledValue}px, 0, 0)`;
    }
  };

  const temporaryTransition = (time: number) => {
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, time);
  };

  const shiftSlide = (direction: string) => {
    switch (direction) {
      case 'right': {
        // @NOTE: 계산된 boxWidth값만큼 오른쪽으로 이동시킴
        // @NOTE: currentIndexRef는 데이터가 많아질 것을 대비해 저장
        setPosition(lastPositionXRef.current - boxWidth);
        lastPositionXRef.current -= boxWidth;
        currentIndexRef.current++;
        break;
      }
      case 'left':
        setPosition(lastPositionXRef.current + boxWidth);
        lastPositionXRef.current += boxWidth;
        currentIndexRef.current--;
        break;
      default:
        setPosition(lastPositionXRef.current);
    }
    temporaryTransition(300);
  };

  const CheckDragOverflowLast = useCallback(
    (draggedX: number) => {
      return draggedX > overflowedX ? true : false;
    },
    [overflowedX]
  );

  const checkDragOverflowFirst = () => {
    return lastPositionXRef.current + boxWidth > 0 ? true : false;
  };

  const mouseStart = (e: any) => {
    // 왼쪽 마우스 클릭일 떄만
    if (e.touches) {
      setSwipeStartX(e.touches[0].clientX);
    } else {
      if (e.buttons === 1) {
        setSwipeStartX(e.clientX);
      }
    }
    setIsDragging(true);
  };

  const dragMove = (e: any) => {
    if (!isDragging) return;

    if (e.touches) {
      setSwipeEndX(e.touches[0].clientX);
    } else {
      if (e.buttons === 1) {
        setSwipeEndX(e.clientX);
      }
    }
  };

  const mouseLeave = () => {
    setIsDragging(false);
  };

  const dragEnd = () => {
    setIsDragging(false);
    const draggedX = swipeStartX - swipeEndX;

    if (-draggedX <= -boxWidth / 2) {
      if (CheckDragOverflowLast(draggedX)) {
        // @NOTE: 오른쪽 drag 시 overflow 된 x값 보다 크다면
        // overflow된 값만큼만 이동
        setPosition(-overflowedX);
      } else {
        shiftSlide('right');
      }
    } else if (-draggedX >= boxWidth / 2) {
      if (checkDragOverflowFirst()) {
        // @NOTE: 왼쪽 drag 시 0보다 커진다면 0으로 고정
        shiftSlide('none');
      } else {
        shiftSlide('left');
      }
    } else {
      shiftSlide('none');
    }
  };

  return {
    swipeRef,
    mouseStart,
    dragMove,
    dragEnd,
    mouseLeave,
    isTransition,
  };
};

export default useSwipe;
