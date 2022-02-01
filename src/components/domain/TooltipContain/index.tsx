import { IProductItem } from '@types';
import { useCheckSameId } from '@hooks';
import { Tooltip } from '@components/base';
import { getPositionOfTooltip } from '@utils/functions';

interface TooltipContain {
  item: IProductItem;
  activedId: number;
}

const TooltipContain = ({ item, activedId }: TooltipContain) => {
  const [isActive] = useCheckSameId(activedId, item.productId);

  return (
    <>
      {isActive && (
        <Tooltip position={getPositionOfTooltip(item.pointX, item.pointY)}>
          <div>
            hi
            {/* <img src={item.imageUrl} alt={item.productName} /> */}
          </div>
        </Tooltip>
      )}
    </>
  );
};

export default TooltipContain;
